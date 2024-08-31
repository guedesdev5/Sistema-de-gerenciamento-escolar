const Disciplina = require('../modelo/Disciplina');
module.exports = function(request, response, banco){
    console.log("DELETE: /disciplinas/:idDisciplina");
    const idDisciplina = request.params.idDisciplina
        const al = new Disciplina(banco)
    al.IdDisciplina = idDisciplina;
        al.delete().then(respostaPromisse=>{
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