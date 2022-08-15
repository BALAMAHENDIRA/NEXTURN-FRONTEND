import { ICast } from './../movies/movie/cast-model';
import { IMovies } from './../movies/movies-model';
import { ITheatres } from './../movies/movie/Theatre-model';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  isPosted : any ;
  name = "bala mahendira";
  theatres = [] as ITheatres[];
  movies = [] as ICast[];
  seatDetailId = 0;
  price = 0;
  starttime = '';
  theatreid : number= 0;
  movie = '';
  date : string | null = "";
  seats : any | null = [] ;
  seatnum : any | null= [];
  constructor(private service : MoviesService) { }

  ngOnInit(): void {
    this.seats = JSON.parse(localStorage.getItem('selected') || '{}');
    this.seatnum = JSON.parse(localStorage.getItem('selectedseats') || '{}');

    this.price = JSON.parse(localStorage.getItem('price') || '{}');
    this.date = localStorage.getItem('booking-date');
    this.starttime = localStorage.getItem('booking-start') || '{}';
    this.movie = localStorage.getItem('booking-movie') || '{}';
    this.theatreid = JSON.parse(localStorage.getItem('booking-theatre') || '{}');
    this.gettheatres(this.theatreid);
    this.getmovies(this.movie);
   // console.log(this.seatnum);
    //console.log(this.name);
    console.log(this.date);
    console.log(this.theatreid);
    //console.log(this.movie);
    //console.log(this.starttime);
  }

  gettheatres(obj : any){
    this.service.gettheatres("api/Movie/GetTheatersById","TheatreId", obj ).subscribe(
      {
        next: (out: any) => {
          this.theatres = out as ITheatres[];
          console.log(this.theatres);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  getmovies(obj : any){
    this.service.gettheatres("api/Movie/GetMovieCasts","MovieId", obj ).subscribe(
      {
        next: (out: any) => {
          this.movies = out as ICast[];
          console.log(this.movies);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  postValues(price: any, seatNum: any, seatDetail: any, theatreId: any, date: any, start: any){
      this.service.postDetails(price, seatNum, seatDetail, theatreId, date, start).subscribe(
        {
          next: (data) => { 
            this.isPosted = data;
            console.log("posted");
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => console.log("Completed")
        }
      );
  }

  OnClick(event : any){

    //this.postValues(this.price, 66, 3, 4, this.date, "1-PM");
    this.seatnum.forEach((element : number)=> {
      if(element<21){
     this.postValues(90,element,1, this.theatreid, this.date, this.starttime )
}
else if (element<41){
  this.postValues(120,element,2, this.theatreid, this.date, this.starttime )

}
else if (element<61){
  this.postValues(150,element,3, this.theatreid, this.date, this.starttime )

}
else if (element<71){
  this.postValues(200,element,4, this.theatreid, this.date, this.starttime )

}
      
    });

  }
}
