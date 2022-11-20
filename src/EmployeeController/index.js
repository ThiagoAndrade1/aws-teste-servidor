const knex = require('../Database');

//THIAGO LEMES ANDRADE 20201001217

module.exports={
    async home(req, res){
        return res.send('Prova 24-10-2022 Thiago Lemes Andrade 20201001217');
    },

    async index(req, res){
        try {
            const result = await knex('funcionario');
    
            return res.send(result);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    async show(req, res){
        try {
            const { nome } = req.params;
            const result = await knex('funcionario')
                .where('nome', 'like', '%' + nome + '%');
            return res.send(result);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    },    
    async create (req, res){
        try {
            const { nome, funcao, setor } = req.body;
            await knex('funcionario').insert({
                nome,
                funcao,
                setor
            })

            return res.status(201).send('Funcionário criado com sucesso!');
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async delete(req, res){
        try {
            const { matricula } = req.params;
            await knex('funcionario')
            .where({ matricula })
            .del();
            return res.status(201).send({msg : `Funcionário ${matricula} foi deletado!`});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    }

}