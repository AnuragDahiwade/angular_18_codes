import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    LastName: new FormControl("", ),
    userName: new FormControl("", [Validators.email, Validators.required]),
    city: new FormControl("", ),
    state: new FormControl("", ),
    zipCode: new FormControl("", ),
    isAcceptTerms: new FormControl(true, [Validators.requiredTrue]),
  })

  formValue: any 

  onSubmit() : boolean{
    debugger;
    this.formValue = this.studentForm.value
    return true
  }

  onReset() {
    this.studentForm = new FormGroup({
      firstName: new FormControl("", ),
      LastName: new FormControl("", ),
      userName: new FormControl("", ),
      city: new FormControl("", ),
      state: new FormControl("", ),
      zipCode: new FormControl("", ),
      isAcceptTerms: new FormControl("", ),
    })
    let nums: number[] = [99, 11, 2, 33, 46, 54 ,34, 45, 22, 32, 21, 27]
    // this.selectionSort(nums)
    // this.insertionSort(nums);
    this.bubbleSort(nums)
  }

  bubbleSort(arr: number[]){
    let len: number = arr.length
    for(let i=0; i< len; i++){
      let flag: boolean = false
      for(let j = 0; j < len - i - 1; j++){
        if(arr[j] > arr[j+1]){
          let temp: number = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp
          flag = true
        }
      }
      if(flag != true) break;
    }

    for(let i in arr){
      console.log(arr[i]);
    }

  }

  insertionSort(arr: number[]) {
    for(let i=1; i<arr.length; i++){
      for(let j=i; j>0 && arr[j] < arr[j-1]; j--){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp
      }
    }
    for(let i in arr){
      console.log(arr[i]);
    }
  }

  selectionSort(arr: number[]){
    for(let i=0; i< arr.length; i++){
      let minNumIdx = i
      for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[minNumIdx]) minNumIdx = j
      }
      let temp = arr[minNumIdx]
      arr[minNumIdx] = arr[i]
      arr[i] = temp
    }
    for(let i in arr){
      console.log(arr[i]);
    }
  }
}
