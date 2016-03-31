movieApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "templ/home.html",
			controller: "movieAppController"
		}).when('/movie/:id', {
			templateUrl: 'templ/movie.html',
			controller: "movieDetailsController"
		}).when('/bookTickets/:id',{
			templateUrl:'templ/bookTicket.html',
			controller:"bookTicketsController"
		})
		.otherwise({
			redirectTo: "/"
		})
})