const connection = require('../database/connection'); //conecta com o banco de dados
const crypto = require('crypto');
module.exports = {
    //modulos(FUNCOES)

   //modulo de listagem 
    async index(request, response){
        const ongs = await connection('ongs').select('*'); // * significa tudo
    
        return response.json(ongs);
    },


    //modulo de criacao
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //cada variavel é salva em uma variavel

        const id = crypto.randomBytes(4).toString('HEX'); //cria um ID

        await connection('ongs').insert({                       //async e await faz o esperar terminar o connection para retornar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};