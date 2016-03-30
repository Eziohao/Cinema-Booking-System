window.movieApp = angular.module('movieApp', ['ngRoute','ngResource']);

movieApp.controller("movieAppController", function($scope,movieAppFactory) {
     
     $scope.currMovie = null;
     $scope.movies=movieAppFactory.query();
     $scope.getMovieById = function(id) {
          var movies = $scope.movies;
          for (var i = 0; i < movies.length; i++) {
               var movie = $scope.movies[i];
               if (movie.id == id) {
                    //console.log(movie);
                    $scope.currMovie = movie;
               }
          }
     };
     $scope.back = function() {
          window.history.back();
     };
     $scope.getCount = function(n) {
          return new Array(n);
     }
     $scope.headerSrc = "templ/header.html";
});
movieApp.controller("movieDetailsController", function($scope, $routeParams) {
     $scope.getMovieById($routeParams.id);
})