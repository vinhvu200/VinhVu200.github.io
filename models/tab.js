class Tab {
	constructor(name, url) {
		this.name = name;
		this.url = url;
		this.active = false;
	}

	name(){
		return this.name;
	}

	url(){
		return this.url;
	}

	setActive(){
		this.active = true;
	}

	setUnactive(){
		this.active = false;
	}

	active(){
		return this.active;
	}
}