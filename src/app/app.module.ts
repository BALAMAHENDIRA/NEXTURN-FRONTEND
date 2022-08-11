import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesService } from './Services/movies.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {SlideshowModule} from 'ng-simple-slideshow';

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
 
const appRoutes: Routes = [
 
  {path: 'movies/:cityId', component: MoviesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie/:movieId', component: MovieComponent},
  {path: 'screens/:movieId', component: ScreensComponent},
  {path: 'theatre', component: TheatreLayoutComponent},
  {path: '', component: FirstComponent}

  
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
