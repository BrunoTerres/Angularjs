angular.module('alurapic').controller('FotoController', function($scope, $http) {
    
    $scope.foto = {};
    $scope.exibe = false;

    $scope.submeter = function() {
        $http.post("v1/fotos", $scope.foto)
        .success(function() {

        })
        .error(function(erro) {
            console.log(erro)
        })
    }
})