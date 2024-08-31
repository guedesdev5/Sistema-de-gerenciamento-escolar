const{request, response} = require("express")
const controle_disciplinaCreate = require("../controle/controle_disciplinaCreate.js")
const controle_disciplinaUpdate = require("../controle/controle_disciplinaUpdate.js")
const controle_disciplinaRead = require("../controle/controle_disciplinaRead.js")
const controle_disciplinaDelete = require("../controle/controle_disciplinaDelete.js")
module.exports = function(app, banco){
    app.post("/disciplinas", (request, response)=>{
        controle_disciplinaCreate(request, response, banco);
    })
    app.get("/disciplinas", (request, response)=>{
        controle_disciplinaRead(request, response, banco);
    })
    app.put("/disciplinas/:idDisciplina", (request, response)=>{
        controle_disciplinaUpdate(request, response, banco);
    })
    app.delete("/disciplinas/:idDisciplina", (request, response)=>{
        controle_disciplinaDelete(request, response, banco);
    })
    
}