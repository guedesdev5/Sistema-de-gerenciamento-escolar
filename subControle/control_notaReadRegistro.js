const Nota = require("../modelo/Notas");

module.exports = function(request, response, banco){
    console.log("GET: /notas/:registro");
    const registro = request.params.registro
    const al = new Nota(banco);
    al.read(registro).then(respostaPromise=>{
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