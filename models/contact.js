class Contact {
	constructor(title, link, logo){
		this.title = title;
		this.link = link;
		this.logo = logo;
	}

	title() {
		return this.title;
	}

	link() {
		return this.link;
	}

	logo() {
		return this.logo;
	}

	redirectUrl() {
		window.location.replace(this.link);
	}
}