import { ITheatre } from './../tscreen/theatre-model';
import { IMovies } from './movies-model';
import { MoviesService } from './../Services/movies.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheatres } from './movie/Theatre-model';


@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  buttondisabled = true;
  searchKey = "";
  selectedItem = '';
  object: any = 1;
  theatre: any | undefined = {} as ITheatres;
  constructor(private moviesServices: MoviesService, private route: ActivatedRoute) { }

  movies = [] as IMovies[];
  theatres = [] as ITheatres[];
  cityId : any ;
  ngOnInit(): void {
    this.object = JSON.parse(localStorage.getItem('cityid') || '{}');
     
    //this.loadData();
    this.getUsers(this.object);
    this.gettheatres(this.object);
    //this.loadMovies(object);
    //this.cityId = this.route.snapshot.paramMap.get("cityId");
    //console.log(this.cityId);
    console.log(this.object);
  }

   
    loadData() {
      this.moviesServices.getMovies("api/Movie/GetMovies").subscribe(
        {
          next: (out) => {
            this.movies = out as IMovies[];
            console.log(this.movies);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => console.log("Completed")
        }
      );
    }

    loadMovies(id : number) {
      this.moviesServices.sendDataToWebApi("api/Movie/GetAllMovies", id).subscribe({
        next: (data) => {
          this.movies = {} as IMovies[];
          console.log(this.movies);
          
        },
        error: (err : any) => {
          console.log(err);
        },
        complete: () => console.log("completed")
      });
    }

     

    selected(emp: any) {
      this.movies = emp;
    }

    getUsers(obj: any) {
      this.moviesServices.getUsers("api/Movie/GetAllMovies","CityId", obj ).subscribe(
        {
          next: (out: any) => {
            this.movies = out as IMovies[];
            console.log(this.movies);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => console.log("Completed")
        }
      );
    }

    getMovieByTheatre(obj: any) {
      this.moviesServices.getUsers("api/Movie/GetAllMoviesByTheatre","theatreId", obj ).subscribe(
        {
          next: (out: any) => {
            this.movies = out as IMovies[];
            console.log(this.movies);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => console.log("Completed")
        }
      );
    }

    

    gettheatres(obj : any){
      this.moviesServices.gettheatres("api/Movie/GetTheaters","CityId", obj ).subscribe(
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
    onselect(event: any){
      console.log(this.selectedItem);
      this.theatre = this.theatres.find((x: { theatreName : string; }) => x.theatreName == this.selectedItem);
      console.log(this.theatre.theatreId);
      var value = this.theatre.theatreId;
      this.getMovieByTheatre(value);
      if(this.selectedItem != ''){
        this.buttondisabled = false;
        localStorage.setItem('detail-theatre', this.theatre.theatreId);
      }
    }
}
