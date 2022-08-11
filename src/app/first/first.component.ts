import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ICities } from './city-model';
import { IMovies } from '../movies/movies-model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 
  slides: any[] = new Array(9).fill({id: -1, src: '', title: '', subtitle: ''});
  movies = [] as IMovies[];
  cities = [] as ICities[];
  selectedItem = '';
  form: any;
  city : any | undefined = {} as ICities;
  constructor(private _service : MoviesService, private root: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadCities();
     // this.onchange(); 
     this.loadData();
  }
  loadCities() {
    this._service.getDataFromWebApi("api/Movie/GetCities").subscribe(
      {
        next: (out) => {
          this.cities = out as ICities[];
          console.log(this.cities);
        },
        error: err => console.log(err),
        complete: () => console.log("Completed")
      }
    );
  }

  loadData() {
    this._service.getMovies("api/Movie/GetMovies").subscribe(
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
  
  onSelectionChange(event: any) {
     
    console.log(this.selectedItem);
    this.city = this.cities.find((x: { name : string; }) => x.name == this.selectedItem);
    console.log(this.city);
    console.log(this.city.cityId);
    localStorage.setItem('cityid', this.city.cityId.toString());

    this.router.navigate(['movies']);
   
}

  
}
