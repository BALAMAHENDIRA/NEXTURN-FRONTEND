import { TheatreComponent } from './theatre/theatre.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Screen3Component } from './screen3/screen3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  { path: 'screen3', component: Screen3Component },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'theatre', component: TheatreComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   
})
export class TScreenRoutingModule { }
