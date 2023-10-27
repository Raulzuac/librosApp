let controllerLibros = angular.module("librosApp", ["ngRoute"]);

controllerLibros.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'../views/home.html',
    })
    .when('/libro/:id',{
        templateUrl:'../views/libro.html',
        controller: 'libroController'
    })
    .otherwise({

    })
})

controllerLibros.controller('librosController', function ($scope,$http) {
    $http.get('../data/libros.json')
    .then(response=>$scope.libros = response.data)
    .catch(error => console.error('ocurrio un problema'))
});

controllerLibros.controller('libroController',function($scope,$routeParams){
    $scope.id = $routeParams.id-1;
})