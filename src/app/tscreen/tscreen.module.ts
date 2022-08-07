import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TScreenRoutingModule } from './tscreen-routing.module';
import { Screen3Component } from './screen3/screen3.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TheatreComponent } from './theatre/theatre.component';
import { MovieNameComponent } from './movie-name/movie-name.component';


@NgModule({
  declarations: [
    Screen3Component,
    NavBarComponent,
    TheatreComponent,
    MovieNameComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    TScreenRoutingModule
  ]
})
export class TScreenModule { }
