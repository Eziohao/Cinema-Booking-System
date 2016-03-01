window.movieApp = angular.module('movieApp', ['ngRoute']);

movieApp.controller("movieAppController", function($scope) {
     $scope.movies = [{
          "id": 0,
          "name": "Inception",
          "IMDB": 8.8,
          "Availability": 30,
          "review": "A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
          "thumb": "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
     }, {
          "id": 1,
          "name": "Batman:The Dark Knight",
          "IMDB": 9,
          "Availability": 10,
          "review": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
          "thumb": "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
     }, {
          "id": 2,
          "name": "Summer Wars",
          "IMDB": 7.8,
          "Availability": 15,
          "review": "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
          "thumb": "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg"
     }];
     $scope.currMovie = null;
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