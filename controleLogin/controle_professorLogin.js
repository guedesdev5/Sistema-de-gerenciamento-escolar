const Professor = require('../modelo/Professores');
const JWT = require('../modelo/JWT')
module.exports = function(request, response, banco){
    
    const email = request.body.email;
    const senha = request.body.senha;


    const prof = new Professor(banco);
    prof.Email = email
    prof.Senha = senha

    prof.login().then(resposta =>{
        if(resposta.status==true){
            
            const jwt = new JWT();
            const token = jwt.gerar(resposta.dados);
            const obj={
                status:true,
                msg:'ssucesso',
                codigo:'002',
                dados:resposta.dados,
                token:token
            }
            response.status(200).send(obj)

        }else{
            const obj={
                status:false,
                msg:'login inválido',
                codigo:'002',
                dados:{},
                token:{}
            }
            response.status(200).send(obj)
        }

    })

}