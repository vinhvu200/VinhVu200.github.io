angular.module('introductionModule', [])

.controller('IntroductionController', function(){
	
	this.scrollDown = function() {
		//window.scrollTo(0,document.body.scrollHeight);

		console.log(document.body.scrollHeight);

		window.scrollBy({ 
		  top: document.body.scrollHeight,
		  behavior: 'smooth' 
		});
	}
});
