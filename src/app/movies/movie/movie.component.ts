import { MoviesComponent } from './../movies.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';
import { IMovies } from '../movies-model';
import { ICast } from './cast-model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesServices: MoviesService) { }

  movie : any | undefined = [] as ICast[];
  movieId: any | null;
  movies = [] as ICast[];

 
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get("movieId");
    
    localStorage.setItem('booking-movie', this.movieId);
    //this.courseId = this.route.snapshot.params['name'];
    console.log(this.movieId);
    //this.loadData();
    //console.log(this.movies);
     this.getUsers(this.movieId);
   
     localStorage.setItem('movid', this.movieId.toString());
    
  }

  loadData() {
    this.moviesServices.getMovies("api/Movie/GetMovies").subscribe(
      {
        next: (out) => {
          this.movies = out as ICast[];
            
           this.movie = this.movies.find((x: { movieId: any; }) => x.movieId == this.movieId);
           console.log(this.movie);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  
  getUsers(obj: any) {
    this.moviesServices.getUsers("api/Movie/GetMovieCasts","MovieId", obj ).subscribe(
      {
        next: (out: ICast[]) => {
          this.movies = out as ICast[];
          this.movie = this.movies.find((x: { movieId: any; }) => x.movieId == this.movieId);
           
          console.log(this.movie);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
}
