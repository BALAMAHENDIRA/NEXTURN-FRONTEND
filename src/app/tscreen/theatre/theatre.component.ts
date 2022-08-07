import { Component, OnInit } from '@angular/core';
import { ITheatre } from '../theatre-model';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
  theatres = [] as ITheatre[];
  constructor() { }

  ngOnInit(): void {
    this.theatres =[
      { TheatreName: 'PVR Cinemas'},
      { TheatreName: 'LA Cinemas'},
      { TheatreName: 'PSR Cinemas'},
      { TheatreName: 'Murugaram Cinemas'},
      { TheatreName: 'Lakshmi Cinemas'},
    
    ];
  }

}
