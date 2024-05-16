//CHAMAR UM MÓDULO INTERNO DO NOME CHAMADO http//
var http = require('http')

//Abrindo servidor, http//

http.createServer(function(req,res){
    res.end('SILENCEEEEEEEEEEEEEE')

}).listen(8081)

console.log('Servidor rodando...')