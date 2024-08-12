import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = "bg-primary"
  isDiv2Active: boolean = true
  num1: string = ""
  num2: string = ""
  isChecked: boolean = false

  studentList: any[] = [
    {stdId: 12, totalmarks: 75, gender: 'male', stdName: "CCC", city: "Kolkata", isActive: false},
    {stdId: 11, totalmarks: 87, gender: 'female', stdName: "AAA", city: "Mumbai", isActive: true},
    {stdId: 13, totalmarks: 83, gender: 'male', stdName: "GGG", city: "Puna", isActive: false},
    {stdId: 14, totalmarks: 71, gender: 'male', stdName: "SSS", city: "Nagpur", isActive: true},
    {stdId: 15, totalmarks: 59, gender: 'female', stdName: "KKK", city: "Banglure", isActive: true},
    {stdId: 16, totalmarks: 90, gender: 'male', stdName: "MMM", city: "Goa", isActive: false},
  ]


  customStyle: any = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'color': 'black',
    'background-color': 'aqua',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%'
  }


  addRedClass(){
    this.div1BgColor = "bg-danger"
  }
  addBlueClass(){
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active
  }

}
