import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  isDiv1Visible: boolean = true
  isDiv2Visible: boolean = false

  textBoxVal1: string = ""
  textBoxVal2: string = ""

  isActive: boolean = false
  selectedState: string = ''

  cityArray: string[] = ['Mumbai', 'Nagpur', 'Thane', 'Pune']

  studentList: any[] = [
    {stdId: 11, stdName: "AAA", city: "Mumbai", isActive: true},
    {stdId: 12, stdName: "CCC", city: "Kolkata", isActive: false},
    {stdId: 13, stdName: "GGG", city: "Puna", isActive: false},
    {stdId: 14, stdName: "SSS", city: "Nagpur", isActive: true},
    {stdId: 15, stdName: "KKK", city: "Banglure", isActive: true},
    {stdId: 16, stdName: "MMM", city: "Goa", isActive: false},
  ]

  constructor(private router: Router) { }

  navigateToAttibute() {
    this.router.navigateByUrl('/attribute-directive')
  }

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2Visibility(){
    this.isDiv2Visible = !this.isDiv2Visible
  }

  // makeDiv3Visible(){
  //   this.textBoxVal1 == this.textBoxVal2 ? this.isDiv3Visible = true : this.isDiv3Visible = false;
  // }
}