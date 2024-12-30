export class PageManager {
	readonly home = '/';
	readonly catalog = '/catalog';
	readonly contacts = '/contacts';

	get pages() {
		return [
			{ id: 1, name: 'Home', url: this.home },
			{ id: 2, name: 'Catalog', url: this.catalog },
			{ id: 3, name: 'Contacts', url: this.contacts },
		];
	}
}
