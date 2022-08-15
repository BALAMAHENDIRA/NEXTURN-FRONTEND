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
    var newDate = (this.model.year+ "-" +this.model.month+ "-"+this.model.day);

    this.getTheatreList(this.movid, this.cityId, newDate) ;

    //this.latest_date =this.datepipe.transform(this.model, 'yyyy-MM-dd');
    //console.log(this.latest_date);
  localStorage.setItem("date", newDate);
  console.log(this.model);
    
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
  
    var newDate = (this.model.year+ "-"+this.model.month+"-"+this.model.day);

    console.log(this.movid);
    console.log(this.cityId);
    console.log(newDate);
    this.getTheatreList(this.movid, this.cityId, newDate) ;
    console.log(this.theatreList);

  localStorage.setItem("date", newDate);

}
}
