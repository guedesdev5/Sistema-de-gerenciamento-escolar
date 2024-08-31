const Disciplina = require("../modelo/Disciplina");


module.exports = function(request, response, banco){
    console.log("POST: /disciplinas");
    const idDisciplina = request.body.idDisciplina;
    const nome = request.body.nome;
    const Professor_registro = request.body.Professor_registro;
    const Turma_idTurma = request.body.Turma_idTurma;

    const al = new Disciplina(banco);
    al.IdDisciplina = idDisciplina;
    al.Nome = nome;
    al.Professor_Registro = Professor_registro;
    al.Turma_IdTurma = Turma_idTurma;

    al.create().then(respostaPromise=>{
        const resposta = {
            status: true,
            msg: 'Cadastro feito com sucesso!',
            codigo: '201',
            
        }
        console.log('Cadastro feito!')
        response.status(201).send(resposta)
    }).catch(erro =>{
        const resposta = {
            status: false,
            msg: 'erro ao executar',
            codigo: '200',
            dados: erro
        }
        response.status(200).send(resposta);
    })

}