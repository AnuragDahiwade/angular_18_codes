import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // string, number, date, boolean

  myClassName = 'bg-danger'
  stateName: string = "Maharashtra"
  courseName: string = "Angular 18 "
  inputType = "checkbox"
  rollNumber: number = 123
  isActive: boolean = false
  currentDate: Date = new Date()
  myName = signal("Anurag Dahiwade")
  

  constructor() {

  }

  changeSignameState(){
    this.myName.set("anu Dahiwade")
  }

  changeCourseName(){
    if(this.courseName == "Angular 18"){
      this.courseName = "React"
    }else{
      this.courseName = "Angular 18"
    }
  }

  showAlert(message: string) {
    alert(message)
  }
}
