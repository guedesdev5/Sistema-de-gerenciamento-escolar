const{request, response} = require("express")
const control_notaCreate = require("../subControle/control_notaCreate");
const control_notaRead = require("../subControle/control_notaRead");
const control_notaUpdate = require("../subControle/control_notaUpdate");
const control_notaDelete = require("../subControle/control_notaDelete");
const control_notaReadRegistro = require("../subControle/control_notaReadRegistro");

module.exports = function(app, banco){
    app.post("/notas", (request, response)=>{
        control_notaCreate(request, response, banco);
    })
    app.get("/notas", (request, response)=>{
        control_notaRead(request, response, banco);
    })
    app.get("/notas/:registro", (request, response)=>{
        control_notaReadRegistro(request, response, banco);
    })
    app.put("/notas/:idNota", (request, response)=>{
        control_notaUpdate(request, response, banco);
    })
    app.delete("/notas/:idNota", (request, response)=>{
        control_notaDelete(request, response, banco);
    })
}
