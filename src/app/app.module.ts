
import { Screen3Component } from './tscreen/screen3/screen3.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
 
 

 
 


@NgModule({
  declarations: [
    
     
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [Screen3Component]
})
export class AppModule { }
