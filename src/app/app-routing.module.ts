import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // importamos los components que hemos creado
import { ListComponent } from './list/list.component'; 
import { TictactoeComponent } from './tictactoe/tictactoe.component'; 


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'tictactoe', component: TictactoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
