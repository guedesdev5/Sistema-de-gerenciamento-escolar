const{request, response} = require("express")
const Professor = require('../modelo/Professores');
const control_professorCreate = require("../controle/control_professorCreate");
const control_professorRead = require("../controle/control_professorRead");
const control_professorUpdate = require("../controle/control_professorUpdate");
const control_professorDelete = require("../controle/control_professorDelete");
const controle_professorLogin = require("../controleLogin/controle_professorLogin");

module.exports = function(app, banco){
    app.post("/loginProf", (request, response)=>{
        controle_professorLogin(request, response, banco);
    })
    app.post("/professores", (request, response)=>{
        control_professorCreate(request, response, banco);
    })
    app.get("/professores", (request, response)=>{
        control_professorRead(request, response, banco);
    })
    app.put("/professores/:registro", (request, response)=>{
        control_professorUpdate(request, response, banco);
    })
    app.delete("/professores/:registro", (request, response)=>{
        control_professorDelete(request, response, banco);
    })
}
