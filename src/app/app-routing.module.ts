import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {constants} from "../constants";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: constants.routes.home, component: HomeComponent},
  {path: '', redirectTo: constants.routes.home, pathMatch: 'full'},
  {path: '**', redirectTo: constants.routes.home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
