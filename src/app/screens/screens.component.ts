import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  movieId!: any | null;
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get("movieId");
  }

}
