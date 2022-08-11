import { SeatsComponent } from './seats/seats.component';
import { MoviebarComponent } from './moviebar/moviebar.component';
import { Screen4Component } from './screen4/screen4.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'screen4', component: Screen4Component },
  { path: 'moviebar', component: MoviebarComponent },
  { path: 'seats', component: SeatsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatLayoutRoutingModule { }
