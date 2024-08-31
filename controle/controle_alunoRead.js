const Aluno = require("../modelo/Aluno");

module.exports = function(request, response, banco){
    console.log("GET: /alunos");

    const al = new Aluno(banco);
    al.read().then(respostaPromise=>{
        const resposta = {
            status: true,
            msg: ' sucesso!',
            codigo: '201',
            dados: respostaPromise
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