const Aluno = require("../modelo/Aluno");
const JWT = require("../modelo/JWT");

module.exports = function(request, response, banco){
    console.log("POST: /alunos");

        
    const matricula = request.body.matricula;
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