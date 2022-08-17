import { ICast } from './../movies/movie/cast-model';
import { IMovies } from './../movies/movies-model';
import { ITheatres } from './../movies/movie/Theatre-model';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  edited = true;
  snack = 0;
  popcorn : any = 0;
  coke : any = 0;
  icecream : any = 0;
  puff : any = 0;
  samosa : any = 0;
  coldcoffee: any = 0;
  blackforest: any = 0;
  milk: any = 0;
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
  constructor(private service : MoviesService, private router: Router) { }

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
   
    console.log(this.movie);
    console.log(this.theatreid);
    
    this.displayfood();
    this.checklocal();
  }
  checklocal(){
    if(this.date == null ){
      console.log("bala");
    this.router.navigate(['']);

    }
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

  displayfood(){
    if(this.snack != 0){
      this.edited =false;
    }
    else{
      this.edited = true;
    }
  }

  addpopcorn(){
    if(this.popcorn < 5){
      this.popcorn+=1;
      this.price+=40;
      this.snack +=40;
    this.displayfood();

    }
  }
  subpopcorn(){
    if(this.popcorn > 0){
      this.popcorn-=1;
      this.price-=40;
      this.snack -=40;
    this.displayfood();


    }
  }

  addcoke(){
    if(this.coke < 5){
      this.coke+=1;
      this.price+=30;
      this.snack +=30;
    this.displayfood();


    }
  }
  subcoke(){
    if(this.coke  > 0){
      this.coke-=1;
      this.price-=30;
      this.snack -=30;
    this.displayfood();


    }
  }
  addice(){
    if(this.icecream < 5){
      this.icecream+=1;
      this.price+=45;
      this.snack +=45;
    this.displayfood();


    }
  }
  subice(){
    if(this.icecream  > 0){
      this.icecream-=1;
      this.price-=45;
      this.snack -=45;
    this.displayfood();


    }
  }

  addpuff(){
    if(this.puff < 5){
      this.puff+=1;
      this.price+=40;
      this.snack +=40;
    this.displayfood();


    }
  }
  subpuff(){
    if(this.puff  > 0){
      this.puff-=1;
      this.price-=40;
      this.snack -=40;
    this.displayfood();
    }
  }

  addsamosa(){
    if(this.samosa < 5){
      this.samosa+=1;
      this.price+=20;
      this.snack +=20;
    this.displayfood();
    }
  }

  subsamosa(){
    if(this.samosa  > 0){
      this.samosa-=1;
      this.price-=20;
      this.snack -=20;
    this.displayfood();
    }
  }

  addcoffee(){
    if(this.coldcoffee < 5){
      this.coldcoffee+=1;
      this.price+=55;
      this.snack +=55;
    this.displayfood();
    }
  }
  subcoffee(){
    if(this.coldcoffee  > 0){
      this.coldcoffee-=1;
      this.price-=55;
      this.snack -=55;
    this.displayfood();
    }
  }

  addblack(){
    if(this.blackforest < 5){
      this.blackforest+=1;
      this.price+=60;
      this.snack +=60;
    this.displayfood();
    }
  }
  subblack(){
    if(this.blackforest  > 0){
      this.blackforest-=1;
      this.price-=60;
      this.snack -=60;
    this.displayfood();
    }
  }

  addmilk(){
    if(this.milk < 5){
      this.milk+=1;
      this.price+=50;
      this.snack +=50;
    this.displayfood();
    }
  }
  submilk(){
    if(this.milk  > 0){
      this.milk-=1;
      this.price-=50;
      this.snack -=50;
    this.displayfood();
    }
  }
}
