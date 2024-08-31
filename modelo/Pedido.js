module.exports = class Aluno{
    constructor(banco){
        this._banco = banco;
        this.idPedidoRevisao = null;
        this.Nota_idNota = null;
        this.descricao = null;
        this.status = null;
    }

    async create() {
        const promise = new Promise((resolve, reject) => {
            const idPedidoRevisao = this.idPedidoRevisao
            const Nota_idNota = this.Nota_idNota
            const descricao = this.descricao
            const status = this.status
        
            let parametros = [idPedidoRevisao,Nota_idNota,descricao,status];
            let sql = "INSERT INTO pedidorevisao (idPedidoRevisao,Nota_idNota,descricao,status) VALUES (?,?,?,?);";
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
            let sql = "select * from pedidorevisao;";

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
            const idPedidoRevisao = this.idPedidoRevisao
            const Nota_idNota = this.Nota_idNota
            const descricao = this.descricao
            const status = this.status


            let parametros = [Nota_idNota,descricao,status, idPedidoRevisao]
            let sql = "UPDATE pedidorevisao SET Nota_idNota=?, descricao=?, status=? WHERE idPedidoRevisao=?;"
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
            const idPedidoRevisao = this.idPedidoRevisao
            let parametros = [idPedidoRevisao]
            let sql = "DELETE FROM pedidorevisao WHERE idPedidoRevisao=?;"

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
    set IdPedidoRevisao(idPedidoRevisao){
        this.idPedidoRevisao=idPedidoRevisao;
    }
    get IdPedidoRevisao(){
        return this.idPedidoRevisao;
    }

    set Nota_IdNota(Nota_idNota){
        this.Nota_idNota=Nota_idNota;
    }
    get Nota_IdNota(){
        return this.Nota_idNota;
    }

    set Descricao(descricao){
        this.descricao=descricao;
    }
    get Descricao(){
        return this.descricao;
    }

    set Status(status){
        this.status=status;
    }
    get Status(){
        return this.status;
    }
    

}
