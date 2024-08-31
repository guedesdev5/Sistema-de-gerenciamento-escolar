const Historico = require("../modelo/Historico");


module.exports = function(request, response, banco){
    console.log("POST: /historicos");
   
    const Nota_idNota = request.body.Nota_idNota;
    const nota = request.body.nota;
    const ultimaAlteracao = request.body.ultimaAlteracao;

    const al = new Historico(banco);
    al.Nota_IdNota = Nota_idNota;
    al.Nota = nota;
    al.UltimaAlteracao = ultimaAlteracao;


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