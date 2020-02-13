import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObervabledemoComponent } from './obervabledemo/obervabledemo.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
const routes :Routes =[
  {path:"",component:DashboardComponent},
  {path :"pdm",component:ObervabledemoComponent},
  {path :"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
