const Pedido = require("../modelo/Pedido");

module.exports = function(request, response, banco){
    console.log("PUT: /Pedido/:idPedidoRevisao");
    const idPedidoRevisao = request.params.idPedidoRevisao;
    const Nota_idNota = request.body.Nota_idNota;
    const descricao = request.body.descricao;
    const status = request.body.status;

    const al = new Pedido(banco);
    al.IdPedidoRevisao = idPedidoRevisao;
    al.Nota_IdNota = Nota_idNota;
    al.Descricao = descricao;
    al.Status = status;


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