angular.module('projectsModule', [])

.service('ProjectService', function(){

	// TurnKey
	turnkey_images = ['/images/turnkey_1.png', '/images/turnkey_2.png', '/images/turnkey_3.png', '/images/turnkey_4.png', '/images/turnkey_5.png'];
	var turnkey = new Project('TurnKey');
	turnkey.setDescription('For my Senior Experience Project, my team was tasked with the creation of prototypical android mobile application for TurnKey Strategic Relations. The team was comprised of both business and computer science students. This application provides tracking mechanisms to monitor the progress of goals set for the company. Competency scores are calculated from these continuous feedback in order to see how employees are doing at any point in time.');
	turnkey.setGithubUrl('https://github.com/vinhvu200/Turnkey');
	turnkey.addImages(turnkey_images);
	turnkey.setImageWidth(250);

	// Bill Split
	billSplit_images = ['/images/billSplit_1.png', '/images/billSplit_2.png', '/images/billSplit_3.png', '/images/billSplit_4.png', '/images/billSplit_5.png'];
	var billSplit = new Project('Bill Split');
	billSplit.setDescription('I designed an iOS mobile application to identify and split items on a receipt by product/price. Using tesseractOCR, your phone would be able to recognize texts on a receipt and parse it out line by line. After adding, deleting, and editing the appropriate lines, the user can assign individuals to their various purchase (along with tip and tax) so the application can partition the bill fairly. In retrospect, there is still lots of manual inputs to do but at least it is neatly formatted. Check out my Github for more details!');
	billSplit.setGithubUrl('https://github.com/vinhvu200/BillSplit');
	billSplit.addImages(billSplit_images);
	billSplit.setImageWidth(250);

	// MazeAI
	mazeAI_images = ['/images/mazeAI_1.png', '/images/mazeAI_2.png', '/images/mazeAI_3.png'];
	var mazeAI = new Project('Maze AI');
	mazeAI.setDescription('I have been learning about Reinforcement Learning lately so I decided to put some of that knowlege to practice. Here, I created a tool to visually represent what is happening during the learning process of Q(λ). Users can observe how certain parameter affects the learning by watching the bot learn the maze or manually move the bot itself to see the results. Check out my Github for a more detailed explanation and videos of the bot learning the maze.');
	mazeAI.setGithubUrl('https://github.com/vinhvu200/MazeAI');
	mazeAI.addImages(mazeAI_images);
	mazeAI.setImageWidth(800);
	mazeAI.setImageBorder(true);
	mazeAI.setImagePortrait(false);

	// Service to be used
	var projectService = {};
	projectService.projects = [turnkey, billSplit, mazeAI];

	return projectService;
})

.controller('ProjectsController', function($scope, ProjectService){

	this.projects = ProjectService.projects;
	this.currentTab = 0;

	this.setTab = function(tab){
		this.currentTab = tab;
	};

	this.checkTab = function(tab){
		return this.currentTab === tab;
	}
});