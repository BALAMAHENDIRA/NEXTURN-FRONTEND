import { ITheatreList } from './theatre-list-model';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit {
  tdate:any = new Date();
  date: any = this.tdate.getDate();
  min : any ;
  newDate: any ;
  currentDate = new Date();
  model: NgbDateStruct =   { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: this.currentDate.getDate() };
  theatreList = [] as ITheatreList[];
 movid: number=0;
 cityId : number =0;
  constructor(private service: MoviesService  ) { }

  ngOnInit(): void {
    this.cityId = JSON.parse(localStorage.getItem('cityid') || '{}');
    console.log(this.cityId);
    this.movid = JSON.parse(localStorage.getItem('movid') || '{}');
    console.log(this.movid);
      this.newDate = (this.model.year+ "-" +this.model.month+ "-"+this.model.day);

    this.getTheatreList(this.movid, this.cityId, this.newDate) ;

    if(this.date<10){
      this.date="0"+this.date;
    }
    var month:any = this.tdate.getMonth()+1;
    if(month<10){
      month="0"+month;
    }
    var year :any  = this.tdate.getFullYear();
    this.min = year +"-"+month+"-"+this.date;
    console.log(this.min);
    
  localStorage.setItem("date", this.min);
  console.log(this.min);
    
  }


  getTheatreList(obj: any, obj1 : any, obj2: any) {
    this.service.getFour(  obj, obj1, obj2 ).subscribe(
      {
        next: (out: any) => {
          this.theatreList = out as ITheatreList[];
          console.log(this.theatreList);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

change(event : any){
  
  console.log(this.model);
  
 var b = event.target.value;
 console.log(b);
  
    // var newDate = (this.model.year+ "-"+this.model.month+"-"+this.model.day);

    console.log(this.movid);
    console.log(this.cityId);
    console.log(b);
    this.getTheatreList(this.movid, this.cityId, b) ;
    console.log(this.theatreList);

  localStorage.setItem("date", b);

}
 
}
