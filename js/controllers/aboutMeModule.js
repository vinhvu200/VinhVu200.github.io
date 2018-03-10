angular.module('aboutMeModule', [])

.controller('AboutMeController', function(){
	
	this.scrollDown = function() {

		window.scrollBy({ 
		  top: document.body.scrollHeight,
		  behavior: 'smooth' 
		});
	}
});
