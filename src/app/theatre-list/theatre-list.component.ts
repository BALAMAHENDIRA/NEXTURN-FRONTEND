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
  //latest_date: any ;
  constructor(private service: MoviesService  ) { }

  ngOnInit(): void {
    var cityId = JSON.parse(localStorage.getItem('cityid') || '{}');
    console.log(cityId);
    var movid = JSON.parse(localStorage.getItem('movid') || '{}');
    console.log(movid);

    this.getTheatreList(movid, cityId) ;

    //this.latest_date =this.datepipe.transform(this.model, 'yyyy-MM-dd');
    //console.log(this.latest_date);
    var newDate = (this.model.year+ "-"+this.model.month+"-"+this.model.day);
  localStorage.setItem("date", newDate);
  console.log(this.model);
    
  }


  getTheatreList(obj: any, obj1 : any) {
    this.service.getFour("api/Movie/GetshowDetais","MovieID","CityID", obj, obj1 ).subscribe(
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
  
  

  localStorage.setItem("date", newDate);

  localStorage.setItem("date", newDate);
}
}
