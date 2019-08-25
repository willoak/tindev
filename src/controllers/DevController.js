// 020 importar axios serve para fazer conexao com apis
const axios = require('axios');
// 021 importar o model de dev para poder salvar no banco de dados
const Dev = require('../models/Dev');

// 015 os controllers sao responsaveis por receber as requisicoes e vao mostrar alguma resposta
module.exports = {
    //criar um desenvolvedor // store é um metodo de criacao
    async store(req, res){
        //pegando o user pelo body
        const { username } = req.body;

        // 024 verificando se o usuario é repetido
        const userExists = await Dev.findOne({ user:username });
        //se for repetido ele apenas retorna os dados já cadastrados
        if(userExists){
            return res.json(userExists);
        }
        
        //criando a url para pegar os dados do usuario via api do github usando o axios
        const response = await axios.get(`https://api.github.com/users/${username}`);

        // 023 pegando os dados do usuario e desestruturando em variaveis
        const {name, bio, avatar_url: avatar} = response.data;

        // 022 chamando a funcao dentro de dev 
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};

// 019 instaldo o pacote axios para acessar apis