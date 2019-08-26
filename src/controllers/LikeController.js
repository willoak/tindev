const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        // 027 aqui estamos pegando o usuario que está recebendo o like
        console.log(req.params.devId);
        //aqui estamos pegando o usuario que está dando o like
        console.log(req.headers.user); 

        // 028 com os logs corretos, hora de pegar as info e colocar em variaveis
        //aqui eu estou apenas pegando os ids dos usuarios
        const { user } = req.headers; 
        const { devId } = req.params;

        // 029 pegando as instancias desses usuarios no banco de dados
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // 030 verificando se está dando like em um user que nao existe
        if(!targetDev) {
            return res.status(400).json({ error: "dev not exists" });
        }

        // 033 verificando se ambos deram like um no outro
        if(targetDev.likes.includes(loggedDev._id)){
            console.log("Deu Match");
        }

        // 031 se encontrou o dev target entao vamos salvar no banco essa informacao
        //pegamos o dev logado e jogamos na tabela likes o id do user que ele deu like, mas só isso ainda nao salva no banco
        loggedDev.likes.push(targetDev._id);

        // 032 para salvar no banco usamos o metodo save
        await loggedDev.save();

        return res.json( loggedDev );
        // 026 qual o desenvolvedor que está dando o like

        //qual o desenvolvedor que está recebendo o like

    }
}