angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos')
    .success(function(retorno){
        $scope.fotos = retorno;
    }).error(function(erro){
        console.log(erro)
    })



});    
    



/*
    $scope.fotos = [];

    $http.get('v1/fotos')
    .success(function(fotos) {
        $scope.fotos = fotos;
    })
    .error(function(erro) {
        console.log(erro);
    })


    
    
    //Puxando imagem do DB usando promisse explicitamente 
    var promisse = $http.get('/v1/fotos')
    promisse.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error)
    });
    

    //maneira com link web direto da img
    $scope.fotos = [
        {
            titulo: "Lua",
            url: "https://imagens.canaltech.com.br/236607.471195-Lua.jpg"
        },
        {
            titulo: "Jureg Comuna",
            url: "https://uploads.spiritfanfiction.com/fanfics/historias/201610/as-aventuras-do-adm-comunista-e-o-burro-falante-do-jureg-6647284-041020161940.png"
        },
        {
            titulo: "Sol",
            url: 'https://programadoresbrasil.com.br/wp-content/uploads/2020/07/nasa-registra-foto-do-sol-mais-proxima-ja-feita-na-historia.jpg'
        }
    ];
   
 */