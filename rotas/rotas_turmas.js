const{request, response} = require("express")
const controle_turmaCreate = require("../controle/controle_turmaCreate.js")
const controle_turmaUpdate = require("../controle/controle_turmaUpdate")
const controle_turmaRead = require("../controle/controle_turmaRead.js")
const controle_turmaDelete = require("../controle/controle_turmaDelete.js")
module.exports = function(app, banco){
    app.post("/turmas", (request, response)=>{
        controle_turmaCreate(request, response, banco);
    })
    app.get("/turmas", (request, response)=>{
        controle_turmaRead(request, response, banco);
    })
    app.put("/turmas/:idTurma", (request, response)=>{
        controle_turmaUpdate(request, response, banco);
    })
    app.delete("/turmas/:idTurma", (request, response)=>{
        controle_turmaDelete(request, response, banco);
    })
    
}