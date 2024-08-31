const Historico = require("../modelo/Historico");

module.exports = function(request, response, banco){
    console.log("PUT: /Historico/:id");
    const Nota_idNota = request.params.id;
    const nota = request.body.nota;
    const ultimaAlteracao = request.body.ultimaAlteracao;

    const al = new Historico(banco);
    al.Nota_IdNota = Nota_idNota;
    al.Nota = nota;
    al.UltimaAlteracao = ultimaAlteracao;


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