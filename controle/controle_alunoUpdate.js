const Aluno = require("../modelo/Aluno");

module.exports = function(request, response, banco){
    console.log("PUT: /alunos/:matricula");
    const matricula = request.params.matricula;
    const nome = request.body.nome;
    const email = request.body.email;
    const wpp = request.body.wpp;
    const senha = request.body.senha

    const al = new Aluno(banco);
    al.Matricula = matricula;
    al.Nome = nome;
    al.Email = email;
    al.Wpp = wpp;
    al.Senha = senha;

    al.update().then(respostaPromise=>{
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