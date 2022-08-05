import { TScreenModule } from './tscreen/tscreen.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  
  { path: '', loadChildren: () => import("./tscreen/tscreen.module").then(x => x.TScreenModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
     ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
