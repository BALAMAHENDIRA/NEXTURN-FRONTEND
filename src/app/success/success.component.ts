import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
edited = false;
  constructor() { }

  ngOnInit(): void {
    this.clear();
  }

  clear(){
    localStorage.clear();
  }

}
