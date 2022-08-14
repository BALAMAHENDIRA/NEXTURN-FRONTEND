import { ISeat } from './seats-model';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  seats = [] as ISeat[];
  check : any | undefined= {} ;
 total = 0;
 totalseats = 0;
  selectedSeats = [] as ISeat[];
  selected = {} as ISeat;
 a = true;
 
  checkBox = [
    {id: 1, name: "A1", checked:false},
    {id: 2,name: "A2", checked:false},
    {id: 3,name: "A3", checked:false},
    {id: 4,name: "A4", checked:false},
    {id: 5,name: "A5", checked:false},
    {id: 6,name: "A6", checked:false},
    {id: 7,name: "A7", checked:false},
    {id: 8,name: "A8", checked:false},
    {id: 9,name: "A9", checked:false},
    {id: 10,name: "A10", checked:false},
    {id: 11,name: "B1", checked:false},
    {id: 12,name: "B2", checked:false},
    {id: 13,name: "B3", checked:false},
    {id: 14,name: "B4", checked:false},
    {id: 15,name: "B5", checked:false},
    {id: 16,name: "B6", checked:false},
    {id: 17,name: "B7", checked:false},
    {id: 18,name: "B8", checked:false},
    {id: 19,name: "B9", checked:false},
    {id: 20,name: "B10", checked:false},
    {id: 21,name: "C1", checked:false},
    {id: 22,name: "C2", checked:false},
    {id: 23,name: "C3", checked:false},
    {id: 24,name: "C4", checked:false},
    {id: 25,name: "C5", checked:false},
    {id: 26,name: "C6", checked:false},
    {id: 27,name: "C7", checked:false},
    {id: 28,name: "C8", checked:false},
    {id: 29,name: "C9", checked:false},
    {id: 30,name: "C10", checked:false},
    {id: 31,name: "D1", checked:false},
    {id: 32,name: "D2", checked:false},
    {id: 33,name: "D3", checked:false},
    {id: 34,name: "D4", checked:false},
    {id: 35,name: "D5", checked:false},
    {id: 36,name: "D6", checked:false},
    {id: 37,name: "D7", checked:false},
    {id: 38,name: "D8", checked:false},
    {id: 39,name: "D9", checked:false},
    {id: 40,name: "D10", checked:false},
    {id: 41,name: "E1", checked:false},
    {id: 42,name: "E2", checked:false},
    {id: 43,name: "E3", checked:false},
    {id: 44,name: "E4", checked:false},
    {id: 45,name: "E5", checked:false},
    {id: 46,name: "E6", checked:false},
    {id: 47,name: "E7", checked:false},
    {id: 48,name: "E8", checked:false},
    {id: 49,name: "E9", checked:false},
    {id: 50,name: "E10", checked:false},
     
     
];

 
  constructor(private route: ActivatedRoute, private service: MoviesService) { }
  theatrid!: any | null;
  starttime: any;
  date!: string | null ;
  ngOnInit(): void {
    this.theatrid = this.route.snapshot.paramMap.get("theatreId");
    this.starttime = this.route.snapshot.paramMap.get("startTime");
    var date =localStorage.getItem('date');
    console.log(this.theatrid);
    console.log(this.starttime);
    console.log(date);
   
   
    
    this.getSelectedSeats(this.theatrid, this.starttime, date );
     
  }
  getSelectedSeats(theatreid: any, start: any, date: any) {
    this.service.getSeats(theatreid, start, date ).subscribe(
      {
        next: (out: any) => {
          this.seats = out as ISeat[];
          console.log(this.seats);
          this.seats.forEach(element => {
            var a = element.seatNumber;
            console.log(a);
            this.disablecheck(a);
          }); 
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

  Onchange(event: any){
    //console.log(event.target.value);
    this.total+=120;
    this.totalseats +=1;
    //console.log(this.selectedSeats);

    this.selected.seatNumber = event.target.value;
    console.log(this.selected);
     
    // this.selectedSeats.forEach(element => {
    //   //element.seatNumber = event.target.value;
    //   this.selectedSeats.push(this.selected);
    //  });
    
    this.selectedSeats.push(this.selected);
     console.log(this.selectedSeats);

  }

 
  disablecheck(num : any){
    
    this.checkBox.forEach(element => {
      if(element.id == num){
        element.checked=true;
      }
    
    });

     
  }
}
