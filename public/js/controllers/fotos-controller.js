angular.module('alurapic').controller('FotosController', function($scope, $http, $resource) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	var recursoFoto = $resource('v1/fotos/:fotoId');

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});


	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId : foto._id}, function() {
			var indicefoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indicefoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = "não foi possivel remover a foto " + foto.titulo;
		});	 
	}

});