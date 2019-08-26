// 013 criando a estrutura do banco de dados no model
const { Schema, model } = require('mongoose');

// 014 estrutura do banco de dados para o dev
const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    // 025 adicinando novos campos no banco para saber se deu like ou dislike
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, //armazena a data de craicao e data de atualizao do usuario
});

//precisamos exportar essas informacoes
module.exports = model('Dev', DevSchema);
