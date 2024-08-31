module.exports = class Turma{
    constructor(banco){
        this._banco = banco;
        this.idTurma = null;
        this.nome = null;
        this.abreviacao = null;
        this.ano = null;
    }

    async create() {
        const promise = new Promise((resolve, reject) => {
            const idTurma = this.idTurma
            const nome = this.nome
            const abreviacao = this.abreviacao
            const ano = this.ano
            let parametros = [idTurma,nome,abreviacao,ano];
            let sql = "INSERT INTO turma (idTurma,nome,abreviacao,ano) VALUES (?,?,?,?);";
            this.banco.query(sql, parametros, function (error, result) {
                if (error) {
                    reject(error);
                }else {
                    resolve(result);
                }
            });
        });
        return promise;
    }

    async read(){
        const promise = new Promise((resolve, reject) => {
            let parametros = [];
            let sql = "select * from turma;";

            this.banco.query(sql, parametros, function (error, result) {
                if (error) {
                    reject(error)
                }else {
                    resolve(result)
                }
            });
        });
        return promise
    }

    async update() {
        const promise = new Promise((resolve, reject) => {
            const idTurma = this.idTurma
            const nome = this.nome
            const abreviacao = this.abreviacao
            const ano = this.ano

            let parametros = [nome,abreviacao,ano, idTurma]
            let sql = "UPDATE turma SET nome=?, abreviacao=?, ano=? WHERE idTurma=?;"
            this.banco.query(sql, parametros, function (error, result) {
                if (error) {
                    reject(error)
                }else {
                    resolve(result)
                }
            });
        });
        return promise;
    }

    async delete() {
        const promise = new Promise((resolve, reject) => {
            const idTurma = this.idTurma
            let parametros = [idTurma]
            let sql = "DELETE FROM turma WHERE idTurma=?;"

            this.banco.query(sql, parametros, function (error, result) {
                if (error) {
                    reject(error)
                }else {
                    resolve(result)
                }
            });
        });
        return promise
    }



    set banco(valor){
        this._banco=valor;
    }
    get banco(){
        return this._banco;
    }
    set IdTurma(idTurma){
        this.idTurma=idTurma;
    }
    get IdTurma(){
        return this.idTurma;
    }

    set Nome(nome){
        this.nome=nome;
    }
    get Nome(){
        return this.nome;
    }

    set Abreviacao(abreviacao){
        this.abreviacao=abreviacao;
    }
    get Abreviacao(){
        return this.abreviacao;
    }

    set Ano(ano){
        this.ano=ano;
    }
    get Ano(){
        return this.ano;
    }
    
}