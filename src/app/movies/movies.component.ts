import { IMovies } from './movies-model';
import { MoviesService } from './../Services/movies.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchKey = "";
  constructor(private moviesServices: MoviesService, private route: ActivatedRoute) { }

  movies = [] as IMovies[];
  cityId : any ;
  ngOnInit(): void {
    var object = JSON.parse(localStorage.getItem('cityid') || '{}');
     
    //this.loadData();
    this.getUsers(object);
    //this.loadMovies(object);
    //this.cityId = this.route.snapshot.paramMap.get("cityId");
    //console.log(this.cityId);
    console.log(object);
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

    sendSearchKey() {
      this.moviesServices.searchKey.next(this.searchKey);
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

}
