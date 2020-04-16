import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HomeService {
	private readonly pageOpened_ls = 'pageOpened';

	constructor() {
	}

	public setPageOpened(): void {
		localStorage.setItem(this.pageOpened_ls, 'true');
	}

	public get pageOpened(): boolean {
		if (localStorage.getItem(this.pageOpened_ls) === 'true') {
			return true;
		} else {
			return false;
		}
	}
}
