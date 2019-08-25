// 01 importando o express / express é uma funcao
const express = require('express');
// 013 importar o mongoose
const mongoose = require('mongoose')

// 010 importar as todas do arquivo routes.js como o routes vem de um arquivo criado por mim, o caminho até o arquivo precisa ser explicito ../../pasta 
const routes = require('./routes');

// 02 criando o servidor express
const server = express();

//conectar o mongoose
mongoose.connect('mongodb+srv://willoak:willoak@cluster0-foycm.mongodb.net/projetotindev?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

// 012 as requisicoes serao feitas em json. para o que o express entenda isso, precisamos falar pra ele que os dados virao em json essa info precisa ser antes das rotas
server.use(express.json());

// 011 para que as rotas de fato sejam usadas, precisamos usar a linha abaixo
server.use(routes);

// 03 setando a porta que o servidor vai ouvir
server.listen(3333);

/*para rodar o servidor sempre que salvar os arquivos, usar o modulo yarn nodemon -D, o ´-D´ é usado para que o modulo só fique disponivel na versao em desenvolvimento
depois de instalado o nodemon, precisa fazer uma alteracao no arquivo package.json
  "scripts": {
    "dev": "nodemon src/server.js"
  },
  com isso, o sistema irá reiniciar o servidor automaticamente
*/

/* 012 instalando o banco de dados yarn add mongoose, criar uma base no site deles */