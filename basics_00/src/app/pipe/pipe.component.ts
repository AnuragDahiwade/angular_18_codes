import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable, pipe } from 'rxjs';
import { NaPipe } from './na.pipe';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe, AsyncPipe, JsonPipe ,UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "anurag"
  lastName: string = "DAHIWADE"
  sentense: string = "The quick brown fox jumps over a lazy dog"
  currentDate: Date = new Date
  student: any = {
    name: "Anurag",
    city: "Nagpur",
    studId: 334,
    state: ''
  }
  currentTime: Observable<Date> = new Observable<Date>

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }
}
