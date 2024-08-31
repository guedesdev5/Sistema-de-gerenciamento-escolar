const Disciplina = require("../modelo/Disciplina");

module.exports = function(request, response, banco){
    console.log("PUT: /disciplinas/:idDisciplina");
    const idDisciplina = request.params.idDisciplina;
    const nome = request.body.nome;
    const Professor_registro = request.body.Professor_registro;
    const Turma_idTurma = request.body.Turma_idTurma;

    const T = new Disciplina(banco);
    T.IdDisciplina = idDisciplina;
    T.Nome = nome;
    T.Professor_Registro = Professor_registro;
    T.Turma_IdTurma = Turma_idTurma;

    T.update().then(respostaPromise=>{
        const resposta = {
            status: true,
            msg: 'Alteração feita com sucesso!',
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