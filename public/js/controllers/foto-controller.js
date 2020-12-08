angular.module('alurapic').controller('FotoController', function($scope, $http, $resource, recursoFoto, $routeParams) {
    
    $scope.foto = {};
    $scope.mensagem = '';
    //$scope.exibe = false;



    if ($routeParams.fotoId) {
        
        recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }), function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';   
        }

    }


    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {

                recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function() {
                    $scope.mensagem = "A foto " + $scope.foto.titulo + "foi alterada com sucesso!";
                },function(erro) {
                    console.log(erro);
                    $scope.mensagem = "Não foi possível alterar a foto " + $scope.foto.titulo;
                });

            } else {

                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluída com sucesso';
                }, function(erro) {
                    console.log(erro)
                    $scope.mensagem = "Não foi possível incluir a foto"
                })
                        
            }

        }
    }
})