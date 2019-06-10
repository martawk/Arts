var app = angular.module("arts", [ "ui.router" ]);


app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
		url : '/',
		controller : "MainController",
		controllerAs : "ctrl",
		templateUrl : "views/home.html"
	}).state('contact', {
		url : '/contact',
		controller : "ContactController",
		controllerAs : "ctrl",
		templateUrl : "views/contact.html"
	}).state('about', {
      		url : '/about',
      		controller : "AboutController",
      		controllerAs : "ctrl",
      		templateUrl : "views/about.html"
   	}).state('gallery', {
            url : '/gallery',
             controller : "GalleryController",
             controllerAs : "ctrl",
             templateUrl : "views/gallery.html"
     });

	$urlRouterProvider.otherwise('/');
});
