import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatLayoutRoutingModule } from './seat-layout-routing.module';
import { Screen4Component } from './screen4/screen4.component';
import { MoviebarComponent } from './moviebar/moviebar.component';
import { SeatsComponent } from './seats/seats.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Screen4Component,
    MoviebarComponent,
    SeatsComponent
  ],
  imports: [
    CommonModule,
    SeatLayoutRoutingModule,
    FormsModule
  ]
})
export class SeatLayoutModule { }
