import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HomeService {
	private readonly skipWelcome_ls = 'skipWelcome';

	constructor() {
	}

	public setSkipWelcome(): void {
		localStorage.setItem(this.skipWelcome_ls, 'true');
	}

	public removeSkipWelcome(): void {
		localStorage.removeItem(this.skipWelcome_ls);
	}

	public get skipWelcome(): boolean {
		if (localStorage.getItem(this.skipWelcome_ls) === 'true') {
			return true;
		} else {
			return false;
		}
	}
}
