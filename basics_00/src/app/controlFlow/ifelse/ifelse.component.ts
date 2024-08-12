import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isDiv1Visible: boolean = false
  isDiv2Toggled: boolean = false

  numValue1: string = ''
  numValue2: string = ''

  seletedStatus: string = ''
  cityArray: string[] = ["Nagpur", "Amravati", "Akola", "Pune", "Mumbai"]

  weekDayNum: number = 0

  studentList: any[] = [
    {stdId: 12, totalmarks: 75, gender: 'male', stdName: "CCC", city: "Kolkata", isActive: false},
    {stdId: 11, totalmarks: 87, gender: 'female', stdName: "AAA", city: "Mumbai", isActive: true},
    {stdId: 13, totalmarks: 83, gender: 'male', stdName: "GGG", city: "Puna", isActive: false},
    {stdId: 14, totalmarks: 71, gender: 'male', stdName: "SSS", city: "Nagpur", isActive: true},
    {stdId: 15, totalmarks: 59, gender: 'female', stdName: "KKK", city: "Banglure", isActive: true},
    {stdId: 16, totalmarks: 90, gender: 'male', stdName: "MMM", city: "Goa", isActive: false},
  ]


  showDiv1() {
    this.isDiv1Visible = true
  }
  hideDiv1() {
    this.isDiv1Visible = false
  }
  toggleDiv2() {
    this.isDiv2Toggled = !this.isDiv2Toggled
  }
}
