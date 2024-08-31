module.exports = class Aluno{
    constructor(banco){
        this._banco = banco;
        this.Nota_idNota = null
        this.nota = null
        this.ultimaAlteracao = null
    }

    async create() {
        const promise = new Promise((resolve, reject) => {
            const Nota_idNota = this.Nota_idNota
            const nota = this.nota
            const ultimaAlteracao = this.ultimaAlteracaoha
            let parametros = [Nota_idNota,nota,ultimaAlteracao];
            let sql = "INSERT INTO historicoalteracoes (Nota_idNota,nota,ultimaAlteracao) VALUES (?,?,?);";
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
            let sql = "select * from historicoalteracoes;";

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
            const Nota_idNota = this.Nota_idNota
            const nota = this.nota
            const ultimaAlteracao = this.ultimaAlteracao

            let parametros = [nota,ultimaAlteracao, Nota_idNota]
            let sql = "UPDATE historicoalteracoes SET nota=?, ultimaAlteracao=? WHERE Nota_idNota=?;"
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
            const Nota_idNota = this.Nota_idNota
            let parametros = [Nota_idNota]
            let sql = "DELETE FROM historicoalteracoes WHERE Nota_idNota=?;"

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
    set Nota_IdNota(Nota_idNota){
        this.Nota_idNota=Nota_idNota;
    }
    get Nota_IdNota(){
        return this.Nota_idNota;
    }

    set Nota(nota){
        this.nota=nota;
    }
    get Nota(){
        return this.nota;
    }

    set UltimaAlteracao(ultimaAlteracao){
        this.ultimaAlteracao=ultimaAlteracao;
    }
    get UltimaAlteracao(){
        return this.ultimaAlteracao;
    }
    

}