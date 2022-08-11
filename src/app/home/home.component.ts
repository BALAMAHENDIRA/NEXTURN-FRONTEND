import { MoviesComponent } from './../movies/movies.component';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesComponent) { }

  courses: any = [];

  ngOnInit(): void {
    this.courses = this.moviesService.movies;
  }

}
