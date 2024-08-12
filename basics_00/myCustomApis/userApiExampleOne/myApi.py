
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:8000",
    "http://0.0.0.0:8000",
    # Add more origins if needed, e.g., "https://example.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: int
    name: str
    email: str

class Item(BaseModel):
    id: int
    name: str
    price: float

# Create a list to store the data
users = [
    User(id=1, name="John Doe", email="john@example.com"),
    User(id=2, name="Jane Doe", email="jane@example.com")
]

items = [
    Item(id=1, name="Item 1", price=10.99),
    Item(id=2, name="Item 2", price=5.99)
]

# Define the API endpoints
@app.get("/users/")
async def read_users():
    return users

@app.get("/users/{user_id}")
async def read_user(user_id: int):
    for user in users:
        if user.id == user_id:
            return user
    return {"error": "User not found"}

@app.post("/users/")
async def create_user(user: User):
    users.append(user)
    return user

@app.put("/users/{user_id}")
async def update_user(user_id: int, user: User):
    for i, existing_user in enumerate(users):
        if existing_user.id == user_id:
            users[i] = user
            return user
    return {"error": "User not found"}

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    for i, user in enumerate(users):
        if user.id == user_id:
            del users[i]
            return {"message": "User deleted"}
    return {"error": "User not found"}

@app.get("/items/")
async def read_items():
    return items

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    for item in items:
        if item.id == item_id:
            return item
    return {"error": "Item not found"}

@app.post("/items/")
async def create_item(item: Item):
    items.append(item)
    return item

@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    for i, existing_item in enumerate(items):
        if existing_item.id == item_id:
            items[i] = item
            return item
    return {"error": "Item not found"}

@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    for i, item in enumerate(items):
        if item.id == item_id:
            del items[i]
            return {"message": "Item deleted"}
    return {"error": "Item not found"}