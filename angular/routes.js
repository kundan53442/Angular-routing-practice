//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBlog'
        })
        .when('/create',{
        	templateUrl     : 'views/create-view.html',
        	controller 		: 'blogCreateController',
        	controllerAs 	: 'currentBlog'
        })
        .when('/contact',{
            templateUrl     : 'views/contact-view.html'
        })
        .when('/about',{
            templateUrl     : 'views/about-view.html'
        })
        .when('/blog/:blogId',{

        	templateUrl     : 'views/blog-view.html',
        	controller 		: 'singleBlogController',
        	controllerAs 	: 'singleBlog'
        })
        .when('/blog/:blogId/edit',{

            templateUrl     : 'views/edit-view.html',
            controller      : 'blogEditController',
            controllerAs    : 'persentBlog'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);