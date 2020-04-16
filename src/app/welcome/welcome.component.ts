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
	}

	clickNext(): void {
		this.homeService.setPageOpened();
		this.router.navigate(['home']);
	}
}
