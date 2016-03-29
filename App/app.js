var app = angular.module('app', ['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider
         .when('/', {
				templateUrl: 'partials/home.html'
			})
        
			.when('/home', {
				templateUrl: 'partials/home.html'
			})

			.when('/gallery', {
				templateUrl: 'partials/photo.html'
			})

			.when('/contact', {
				templateUrl: 'partials/contact.html'
			})

			.when('/find', {
				templateUrl: 'partials/social.html'
			})
            .when('/instagram', {
                templateUrl: 'partials/gallery.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        
	});
