const Notas = require("../modelo/Notas");

module.exports = function(request, response, banco){
    console.log("PUT: /notas/:idNota");
    const idNota = request.body.idNota;
    const Disciplina_idDisciplina = request.body.Disciplina_idDisciplina;
    const Aluno_matricula = request.body.Aluno_matricula;
    const bimestre = request.body.bimestre;
    const nota = request.body.nota;
    const ultimaAlteracao = request.body.ultimaAlteracao;
    const tipoNota = request.body.tipoNota;
    const fezlista = request.body.fezLista;

    const al = new Notas(banco);
    al.IdNota = idNota;
    al.Disciplina_IdDisciplina = Disciplina_idDisciplina;
    al.Aluno_Matricula = Aluno_matricula;
    al.Bimestre = bimestre;
    al.Nota = nota;
    al.UltimaAlteracao = ultimaAlteracao;
    al.TipoNota = tipoNota;
    al.Fezlista = fezlista


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