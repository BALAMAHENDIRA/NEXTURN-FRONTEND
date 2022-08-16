import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ITheatres } from '../movies/movie/Theatre-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service: MoviesService) { }
detail = 0;
theatres = [] as ITheatres[];
  ngOnInit(): void {
    this.detail = JSON.parse(localStorage.getItem('detail-theatre') || '{}');
    this.gettheatres(this.detail);
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
}
