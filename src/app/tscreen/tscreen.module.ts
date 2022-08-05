import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TScreenRoutingModule } from './tscreen-routing.module';
import { Screen3Component } from './screen3/screen3.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TheatreComponent } from './theatre/theatre.component';


@NgModule({
  declarations: [
    Screen3Component,
    NavBarComponent,
    TheatreComponent
  ],
  imports: [
    CommonModule,
    TScreenRoutingModule
  ]
})
export class TScreenModule { }
