const Professor = require('../modelo/Professores');
module.exports = function(request, response, banco){
    console.log("GET: /professores:registro");
        
        const prof = new Professor(banco)
      
        prof.read().then(respostaPromisse=>{
            const resposta = {
                status: true,
                msg: 'Executado com sucesso',
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