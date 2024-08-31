const{request, response} = require("express")
const controle_historicoCreate = require("../subControle/controle_historicoCreate.js")
const controle_historicoUpdate = require("../subControle/controle_historicoUpdate.js")
const controle_historicoRead = require("../subControle/controle_historicoRead.js")
const controle_historicoDelete = require("../subControle/controle_historicoDelete.js")
module.exports = function(app, banco){
    app.post("/historicos", (request, response)=>{
        controle_historicoCreate(request, response, banco);
    })
    app.get("/historicos", (request, response)=>{
        controle_historicoRead(request, response, banco);
    })
    app.put("/historicos/:id", (request, response)=>{
        controle_historicoUpdate(request, response, banco);
    })
    app.delete("/historicos/:id", (request, response)=>{
        controle_historicoDelete(request, response, banco);
    })
    
}