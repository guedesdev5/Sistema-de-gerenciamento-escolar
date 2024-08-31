const{request, response} = require("express")
const controle_alunoCreate = require("../controle/controle_alunoCreate.js")
const controle_alunoUpdate = require("../controle/controle_alunoUpdate")
const controle_alunoRead = require("../controle/controle_alunoRead.js")
const controle_alunoDelete = require("../controle/controle_alunoDelete.js")
const controle_AlunoLogin = require("../controleLogin/controle_AlunoLogin.js")
module.exports = function(app, banco){
    app.post("/loginAluno", (request, response)=>{
        controle_AlunoLogin(request, response, banco);
    })
    app.post("/alunos", (request, response)=>{
        controle_alunoCreate(request, response, banco);
    })
    app.get("/alunos", (request, response)=>{
        controle_alunoRead(request, response, banco);
    })
    app.put("/alunos/:matricula", (request, response)=>{
        controle_alunoUpdate(request, response, banco);
    })
    app.delete("/alunos/:matricula", (request, response)=>{
        controle_alunoDelete(request, response, banco);
    })
    
}