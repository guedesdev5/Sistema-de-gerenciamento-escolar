const Professor = require('../modelo/Professores');
module.exports = function(request, response, banco){
    console.log("PUT: /professores/:registro");
        const registro = request.params.registro
        const nome = request.body.nome
        const email = request.body.email
        const senha = request.body.senha
        const tipo = request.body.tipo
    
        const prof = new Professor(banco)
        
        prof.Registro = registro;
        prof.Nome = nome;
        prof.Email = email;
        prof.Senha = senha;
        prof.Tipo = tipo;
      
        prof.update().then(respostaPromisse=>{
            const resposta = {
                status: true,
                msg: 'Atualizado com sucesso',
                codigo: '201',
                dados: respostaPromisse
            }
            response.status(201).send(resposta)
        }).catch(erro =>{
            const resposta = {
                status: false,
                msg: 'erro ao executar',
                codigo: '500',
                dados: erro
            }
            response.status(200).send(resposta);
        });
}