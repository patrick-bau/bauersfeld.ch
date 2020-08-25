import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DevComponent } from './dev/dev.component';
import {WorktimeCalculatorComponent} from "./worktime-calculator/worktime-calculator.component";


const routes: Routes = [
	{path: '', redirectTo: '/welcome', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'welcome', component: WelcomeComponent},
	{path: 'dev', component: DevComponent},
  {path: 'worktime-calculator', component: WorktimeCalculatorComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
