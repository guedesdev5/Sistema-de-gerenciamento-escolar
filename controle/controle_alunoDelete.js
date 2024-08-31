const Aluno = require('../modelo/Aluno');
module.exports = function(request, response, banco){
    console.log("DELETE: /alunos/:matricula");
    const matricula = request.params.matricula
        const al = new Aluno(banco)
    al.Matricula = matricula;
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