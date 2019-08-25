// 06 esse arquivo foi criado para separar as rotas da aplicacao
// 07 chamar novamente o express pois sem ele o arquivo nao funciona
const express = require('express');
// 016 importar controller dev
const DevController = require('./controllers/DevController')

// 08 usando o router que é um objeto expecífico para rotas
const routes = express.Router();

// 04 criando rotas para poder exibir conteudo / rota GET onde enviamos dados para a aplicação
//o retorno sempre precisa ser em objeto e não em texto simples
routes.get('/', (req, res) => {
    return res.json( { message: `Hey ${req.query.name}` } );
});

// 05 criando metodo post
// 018 essa rota nao será mais usada
/*
routes.post('/devs', (req, res)=> {
    return res.json(req.body);
});
*/

// 017 como agora temos controllers podemos alterar a nossa rota dev para chamar o devController
routes.post('/devs', DevController.store)

// 09 agora precisamos liberar essas rotas para serem usadas no arquivo server.js
module.exports = routes;