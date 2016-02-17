window.movieApp=angular.module('movieApp',[]);

movieApp.controller("movieAppController",function($scope){
	$scope.movies=[
     {
     	"id":0,
     	"name":"Inception",
     	"IMDB":8.8,
     	"Availability":30,
     	"review":"A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
     	"thumb":"https://en.wikipedia.org/wiki/File:Inception_ver3.jpg#/media/File:Inception_ver3.jpg"
     },
     {
     	"id":1,
     	"name":"Batman:The Dark Knight",
     	"IMDB":9,
     	"Availability":10,
     	"review":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
     	"thumb":"https://en.wikipedia.org/wiki/File:Dark_Knight.jpg#/media/File:Dark_Knight.jpg"
     },
     {
     	"id":3,
     	"name":"Summer Wars",
     	"IMDB":7.8,
     	"Availability":15,
     	"review":"A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
     	"thumb":"https://en.wikipedia.org/wiki/File:Summer_Wars_poster.jpg#/media/File:Summer_Wars_poster.jpg"
     }  
	]
})