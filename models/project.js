class Project {
	constructor(title){
		this.title = title;
		this.description = 'a description';
		this.images = [];
		this.githubUrl = 'a URL';
		this.imageWidth = 0;
		this.imageBorder = false;
		this.imagePortrait = true;
	}

	description(){
		return this.description;
	}

	setDescription(description){
		this.description = description;
	}

	images(){
		return this.images;
	}

	addImages(images){

		var i;
		for (i=0; i<images.length; i++){
			this.images.push(images[i]);
		}
	}

	githubUrl(){
		return this.githubUrl;
	}

	setGithubUrl(url){
		this.githubUrl = url;
	}

	imageWidth(){
		return this.imageWidth;
	}

	setImageWidth(width){
		this.imageWidth = width;
	}

	imageBorder(){
		return this.imageBorder;
	}

	setImageBorder(bool){
		this.imageBorder = bool;
	}

	imagePortrait() {
		return this.imagePortrait;
	}

	setImagePortrait(bool) {
		this.imagePortrait = bool;
	}

}