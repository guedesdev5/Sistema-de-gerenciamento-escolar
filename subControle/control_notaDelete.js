const Notas = require('../modelo/Notas');
module.exports = function(request, response, banco){
    console.log("DELETE: /notas/:idNota");
    const idNota = request.params.idNota
    const al = new Notas(banco)
    al.IdNota = idNota;
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