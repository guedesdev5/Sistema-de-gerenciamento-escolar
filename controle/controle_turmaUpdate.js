const Turma = require("../modelo/Turma");

module.exports = function(request, response, banco){
    console.log("PUT: /turmas/:idTurma");
    const idTurma = request.params.idTurma;
    const nome = request.body.nome;
    const abreviacao = request.body.abreviacao;
    const ano = request.body.ano;

    const T = new Turma(banco);
    T.IdTurma = idTurma;
    T.Nome = nome;
    T.Abreviacao = abreviacao;
    T.Ano = ano;

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