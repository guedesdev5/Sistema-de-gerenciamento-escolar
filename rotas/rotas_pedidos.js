const{request, response} = require("express")
const controle_pedidoCreate = require("../subControle/controle_pedidoCreate.js")
const controle_pedidoUpdate = require("../subControle/controle_pedidoUpdate.js")
const controle_pedidoRead = require("../subControle/controle_pedidoRead.js")
const controle_pedidoDelete = require("../subControle/controle_pedidoDelete.js")
module.exports = function(app, banco){
    app.post("/pedidos", (request, response)=>{
        controle_pedidoCreate(request, response, banco);
    })
    app.get("/pedidos", (request, response)=>{
        controle_pedidoRead(request, response, banco);
    })
    app.put("/pedidos/:idPedidoRevisao", (request, response)=>{
        controle_pedidoUpdate(request, response, banco);
    })
    app.delete("/pedidos/:idPedidoRevisao", (request, response)=>{
        controle_pedidoDelete(request, response, banco);
    })
    
}