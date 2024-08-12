import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  // Add other properties as needed
}

interface Record {
  id: number;
  name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
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


export class GetApiComponent {
  apiUrl = 'https://jsonplaceholder.typicode.com/';
  localApiUrl = 'http://0.0.0.0:8000/';

  userList: User[] = [];
  allRecs: Record[] = [];

  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getAllUser();
  //   this.getAllRecords();
  // }

  getAllUser() {
    this.http.get(`${this.apiUrl}users`).subscribe(
      (res: any) => {
        this.userList = res;
      },
      (error: any) => {
        console.error("Error fetching users:", error);
      }
    );
  }

  async getAllRecords() {
   await this.http.get(`${this.localApiUrl}items/`).subscribe(
      
      (res: any) => {
        // debugger;
        this.allRecs = res;
      },
      (error: any) => {
        console.error("Error fetching records:", error);
      }
    );
  }
}