import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DevComponent } from './dev/dev.component';


const routes: Routes = [
	{path: '', redirectTo: '/welcome', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'welcome', component: WelcomeComponent},
	{path: 'dev', component: DevComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
