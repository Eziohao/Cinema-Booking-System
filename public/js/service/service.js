movieApp.factory('movieAppFactory',function($resource){
   return $resource('/movies')
})