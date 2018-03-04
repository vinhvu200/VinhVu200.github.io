angular.module('contactModule', [])

.service('ContactService', function(){

	var github = new Contact('Github', 'https://github.com/vinhvu200', '/images/github_icon.png');
	var linkedIn = new Contact('LinkedIn', 'https://www.linkedin.com/in/vinh-vu-807190149/', '/images/linkedIn_icon.png');

	var contactService = {};
	contactService.contacts = [github, linkedIn];

	return contactService;
})

.controller('ContactController', function(ContactService){

	this.contacts = ContactService.contacts;
});