module.exports = class Disciplina{
    constructor(banco){
        this._banco = banco;
        this.idDisciplina = null;
        this.nome = null;
        this.Professor_registro = null;
        this.Turma_idTurma = null;
    }

    async create() {
        const promise = new Promise((resolve, reject) => {
            const idDisciplina = this.idDisciplina
            const nome = this.nome
            const Professor_registro = this.Professor_registro
            const Turma_idTurma = this.Turma_idTurma
            let parametros = [idDisciplina,nome,Professor_registro,Turma_idTurma];
            let sql = "INSERT INTO disciplina (idDisciplina,nome,Professor_registro,Turma_idTurma) VALUES (?,?,?,?);";
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
            let sql = "select * from disciplina;";

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
            const idDisciplina = this.idDisciplina
            const nome = this.nome
            const Professor_registro = this.Professor_registro
            const Turma_idTurma = this.Turma_idTurma


            let parametros = [nome,Professor_registro,Turma_idTurma, idDisciplina]
            let sql = "UPDATE disciplina SET nome=?, Professor_registro=?, Turma_idTurma=? WHERE idDisciplina=?;"
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
            const idDisciplina = this.idDisciplina
            let parametros = [idDisciplina]
            let sql = "DELETE FROM disciplina WHERE idDisciplina=?;"

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
    set IdDisciplina(idDisciplina){
        this.idDisciplina=idDisciplina;
    }
    get IdDisciplina(){
        return this.idDisciplina;
    }

    set Nome(nome){
        this.nome=nome;
    }
    get Nome(){
        return this.nome;
    }

    set Professor_Registro(Professor_registro){
        this.Professor_registro=Professor_registro;
    }
    get Professor_Registro(){
        return this.Professor_registro;
    }

    set Turma_IdTurma(Turma_idTurma){
        this.Turma_idTurma=Turma_idTurma;
    }
    get Turma_IdTurma(){
        return this.Turma_idTurma;
    }
    
}