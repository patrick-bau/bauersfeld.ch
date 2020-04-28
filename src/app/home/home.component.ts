import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../shared/home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	skipWelcome: boolean;

	constructor(private readonly homeService: HomeService,
				private readonly router: Router) {
	}

	ngOnInit(): void {
		if (this.homeService.skipWelcome) {
			this.skipWelcome = true;
		} else {
			this.skipWelcome = false;
		}
	}

	public setSkipWelcome(): void {
		if (this.skipWelcome) {
			this.homeService.setSkipWelcome();
		} else {
			this.homeService.removeSkipWelcome();
		}
	}
}
