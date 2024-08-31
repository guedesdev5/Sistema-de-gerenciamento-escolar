const express = require('express');
const mysql = require("mysql");
const rotas_professores = require("./rotas/rotas_professores")
const rotas_alunos = require ("./rotas/rotas_alunos")
const rotas_turmas = require("./rotas/rotas_turmas")
const rotas_disciplinas = require("./rotas/rotas_disciplinas")
const rotas_pedidos = require("./rotas/rotas_pedidos")
const rotas_historico = require("./rotas/rotas_historico")
const rotas_notas = require("./rotas/rotas_notas")
const app = express();

app.use(express.json());

app.use(express.static('js'));

app.use('/', express.static(__dirname+"/view"));

const porta = 3000;

const host = "http://localhost:" + porta;

const banco = mysql.createPool({
    connectionLimit: 128,
    host: 'localhost',
    user: 'root',
    password: 'pietro29012007',
    database: 'colegiosunivap'
})

rotas_professores(app, banco);
rotas_alunos(app, banco);
rotas_turmas(app, banco);
rotas_disciplinas(app, banco);
rotas_pedidos(app, banco);
rotas_historico(app, banco);
rotas_notas(app, banco);

app.listen(3000, ()=>{
    console.log("==>" + host)
});