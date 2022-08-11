import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
 
 



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  model!: NgbDateStruct;
  constructor(private calendar: NgbCalendar) {
   
   }
   isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
   isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  ngOnInit(): void {
  }
 


 
 

}
 

