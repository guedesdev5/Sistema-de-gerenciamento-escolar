const Pedido = require('../modelo/Pedido');
module.exports = function(request, response, banco){
    console.log("DELETE: /pedidos/:Nota_idNota");
    const Nota_idNota = request.params.Nota_idNota
        const al = new Pedido(banco)
    al.Nota_IdNota = Nota_idNota;
        al.delete().then(respostaPromisse=>{
            const resposta = {
                status: true,
                msg: 'Executado com sucesso',
                codigo: '201',
                dados: respostaPromisse
            }
            response.status(201).send(resposta)
        }).catch(erro =>{
            const resposta = {
                status: false,
                msg: 'erro ao executar',
                codigo: '500',
                dados: erro
            }
            response.status(200).send(resposta);
        });
}