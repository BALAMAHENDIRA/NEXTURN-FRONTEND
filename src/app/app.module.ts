import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './Services/movies.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { ScreensComponent } from './screens/screens.component';
import { FirstComponent } from './first/first.component';
import { TheatreLayoutComponent } from './theatre-layout/theatre-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';
import { DatePipe } from '@angular/common';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { SuccessComponent } from './success/success.component';
 
const appRoutes: Routes = [
 
  {path: 'movies/:cityId', component: MoviesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie/:movieId', component: MovieComponent},
  {path: 'screens/:theatreId/:startTime', component: ScreensComponent},
  {path: 'theatre', component: TheatreLayoutComponent},
  {path: '', component: FirstComponent},
  {path: 'theatrelist', component: TheatreListComponent},
  {path: 'booking', component: BookingSummaryComponent},
  {path: 'success', component: SuccessComponent}
 
] 

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    AppComponent,
    HomeComponent,
    ScreensComponent,
    FirstComponent,
    TheatreLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    TheatreListComponent,
    BookingSummaryComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    SlideshowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService, DatePipe],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
