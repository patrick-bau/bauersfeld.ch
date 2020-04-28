import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	constructor(private readonly homeService: HomeService, private readonly router: Router) {
	}

	ngOnInit(): void {
		if (this.homeService.skipWelcome) {
			this.router.navigate(['home']);
		}
	}

	clickNext(): void {
		this.router.navigate(['home']);
	}
}
