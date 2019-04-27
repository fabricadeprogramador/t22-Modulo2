const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());

server.get('/', (request, response) => {
    response.send("Bem - Vindo a HT Videos API");
});

server.post('/', (request, response) => {
    let categoria = request.body;
    categoria.id = 1;
    response.statusCode = 500;
    response.send(categoria);
});

server.delete('/:id', (request, response) => {
    const id = request.params.id;
    
    if(id > 0){
        response.send("Excluido com sucesso");
    }else{
        response.send("Nao foi possivel excluir");
    }
})


server.get('/comQuery', (request, response) => {
    const query = request.query;
    response.send(query);
    
})

server.listen('3000', () => {
    console.log('HT Videos API inicializada ...');
});