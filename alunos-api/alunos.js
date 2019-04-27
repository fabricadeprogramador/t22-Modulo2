const express = require('express');
const server = express();
const bodyParser = require('body-parser');

// Transforma os dados da requisicao em json
server.use(bodyParser.json());

// Importando escola.json
const turmas = require('./turmas.json');

// Rota padrao
server.get('/', (req, res) => {
 res.send('Bem Vindo a HT Videos');
});

// Rota todos os alunos
server.get('/alunos', (req, res) => {
  
});

// Rota aluno por id
server.get('/alunos/:id', (req, res) => {
  let id = req.params.id;
  let alunoEncontrado = {};
  for(let i = 0; i < turmas.length; i++){
    alunoEncontrado = turmas[i].alunos.find(aluno => aluno.id === parseInt(id));
    if(alunoEncontrado){
      break;
    }
    //Alternativa sem utilizar o find
    // if(alunoEncontrado.id){
    //   break;
    // }
    // for(let j = 0; j < turmas[i].alunos.length; j++ ){
    //   if(turmas[i].alunos[j].id == id){
    //     alunoEncontrado = turmas[i].alunos[j];
    //     console.log(turmas[i].alunos[j].id + 'achou ?' , turmas[i].alunos[j].id == id);
    //     break;
    //   }
    //   console.log(turmas[i].alunos[j].id + 'achou ?' , turmas[i].alunos[j].id == id);
    // }
  }

  res.send(alunoEncontrado);
});

// Rota todas as turmas com os alunos
server.get('/turmas', (req, res) => {
  
});

server.listen(3000, () => {
   console.log('HT Vídeos API inicializada ...');
});
