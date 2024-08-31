const Turma = require("../modelo/Turma");

module.exports = function(request, response, banco){
    console.log("POST: /alunos");
    const idTurma = request.body.idTurma;
    const nome = request.body.nome;
    const abreviacao = request.body.abreviacao;
    const ano = request.body.ano;

    const al = new Turma(banco);
    al.IdTurma = idTurma;
    al.Nome = nome;
    al.Abreviacao = abreviacao;
    al.Ano = ano;

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