import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})




// 1. create the Virtual enviroment
// > python -m venv myenv

// 2. First Activate the Virtual enviroment with below command.
// > source venv/bin/activate

// 3. Install the fastApi and uvicorn
// > pip install fastapi uvicorn

// 4. to the the fastApi we user the uvicorn use below bommand
// > uvicorn myApi:app --host 0.0.0.0 --port 8000

// 5 command to the new user with the terminal
// > curl -X POST -H "Content-Type: application/json" -d '{"id": 3, "name": "New User", "email": "newuser@example.com"}' http://localhost:8000/users/


export class PostApiComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }

  userObj: any = {
    "id": 0,
    "name": "",
    "email": ""
  }
  allUsers: any[] = []
  http = inject(HttpClient)

  onSave() {
      let newId = this.getMaxDepartmentId() + 1
      this.userObj.id = newId

      this.http.post("http://0.0.0.0:8000/users/", this.userObj).subscribe((res: any) => {
        // debugger;
        
        if(res.result || undefined){
          alert("User is created")
        }else{
          alert(res.message)
        }
      })
      this.getUsers()
  }

  onUpdate(id: any) {
    let thisId = id ? id : -1

      this.http.put("http://0.0.0.0:8000/users/"+thisId, this.userObj).subscribe((res: any) => {
        // debugger;
        
        if(res.result || undefined){
          alert("User is created")
        }else{
          alert(res.message)
        }
      })
      this.getUsers()
  }

  onDelete(item: any) {
    let thisId = item ? item: -1
    this.http.delete("http://0.0.0.0:8000/users/"+thisId, this.userObj).subscribe((res: any) => {
      if(res.result || undefined){
        alert("User is created")
      }else{
        alert(res.message)
      }
    })

    this.getUsers()
  }

  getUsers() {
    this.http.get("http://0.0.0.0:8000/user/").subscribe((res: any) => {
      debugger;
      this.allUsers = res
    },
    (error: any) => {
        console.error("Error fetching users: ", error)
    }
    )
  }
  getMaxDepartmentId(): number {
    this.getUsers();
    let maxId = this.allUsers[0].id
    for (let index = 0; index < this.allUsers.length; index++) {
      const element = this.allUsers[index];
      if(element.id > maxId) maxId = element.id
    }
    return maxId
  }
  onEdit(item: any){
    this.userObj = item;
  }
}
