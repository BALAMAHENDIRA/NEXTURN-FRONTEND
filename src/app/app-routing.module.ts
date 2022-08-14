import { TheatreListComponent } from './theatre-list/theatre-list.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesComponent } from './movies/movies.component';
import { ScreensComponent } from './screens/screens.component';
import { MovieComponent } from './movies/movie/movie.component';
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
   
  { path: 'seat-layout', loadChildren: () => import("./seat-layout/seat-layout.module").then(x => x.SeatLayoutModule)},
  
  { path: 'tscreen', loadChildren: () => import("./tscreen/tscreen.module").then(x => x.TScreenModule)},
  {path: 'movie/:movieId/:title', component: MovieComponent},
  {path: 'screens/:movieId', component: ScreensComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'slide', component: SlideshowComponent},
  {path: 'theatrelist', component: TheatreListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
     
     ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
