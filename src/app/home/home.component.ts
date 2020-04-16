import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../shared/home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private readonly homeService: HomeService,
				private readonly router: Router) {
	}

	ngOnInit(): void {
		if (!this.homeService.pageOpened) {
			this.router.navigate(['welcome']);
		}
	}

}
