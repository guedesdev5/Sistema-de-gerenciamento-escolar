module.exports = class Nota{
    constructor(banco){
        this._banco = banco;
        this.idNota = null;
         this.Disciplina_idDisciplina = null;
         this.Aluno_matricula = null;
         this.bimestre = null;
         this.nota = null;
         this.ultimaAlteracao = null;
         this.tipoNota = null;
         this.fezlista = null;
    }

    async create() {
        const promise = new Promise((resolve, reject) => {
            const idNota = this.idNota
            const Disciplina_idDisciplina = this.Disciplina_idDisciplina
            const Aluno_matricula = this.Aluno_matricula
            const bimestre = this.bimestre
            const nota = this.nota
            const ultimaAlteracao = this.ultimaAlteracao
            const tipoNota = this.tipoNota
            const fezlista = this.fezlista

            let parametros = [idNota,Disciplina_idDisciplina,Aluno_matricula,bimestre,nota,ultimaAlteracao,tipoNota,fezlista ];
            let sql = "INSERT INTO nota (idNota,Disciplina_idDisciplina,Aluno_matricula,bimestre, nota, ultimaAlteracao, tipoNota, fezlista) VALUES (?,?,?,?, ?, ?, ?, ?);";
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

    async read(idDisc = null){
        const promise = new Promise((resolve, reject) => {
            let parametros = [idDisc];
            let sql = "select * from nota where Disciplina_idDisciplina = ?;";
            if(idDisc === null)
                sql = "select * from nota;"

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
            const idNota = this.idNota
            const Disciplina_idDisciplina = this.Disciplina_idDisciplina
            const Aluno_matricula = this.Aluno_matricula
            const bimestre = this.bimestre
            const nota = this.nota
            const ultimaAlteracao = this.ultimaAlteracao
            const tipoNota = this.tipoNota
            const fezlista = this.fezlista

            let parametros = [Disciplina_idDisciplina,Aluno_matricula,bimestre,nota,ultimaAlteracao,tipoNota,fezlista,idNota ];
            let sql = "UPDATE nota SET Disciplina_idDisciplina=?, Aluno_matricula=?, bimestre=?, nota=?, ultimaAlteracao=?, tipoNota=?, fezLista=? WHERE idNota=?;"
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
            const idNota = this.idNota
            let parametros = [idNota]
            let sql = "DELETE FROM nota WHERE idNota=?;"
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
    set IdNota(idNota){
        this.idNota=idNota;
    }
    get IdNota(){
        return this.idNota;
    }

    set Disciplina_IdDisciplina(Disciplina_idDisciplina){
        this.Disciplina_idDisciplina=Disciplina_idDisciplina;
    }
    get Disciplina_IdDisciplina(){
        return this.Disciplina_idDisciplina;
    }

    set Aluno_Matricula(Aluno_matricula){
        this.Aluno_matricula=Aluno_matricula;
    }
    get Aluno_Matricula(){
        return this.Aluno_matricula;
    }

    set Bimestre(bimestre){
        this.bimestre=bimestre;
    }
    get Bimestre(){
        return this.bimestre;
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
    

    set TipoNota(tipoNota){
        this.tipoNota=tipoNota;
    }
    get TipoNota(){
        return this.tipoNota;
    }

    set Fezlista(fezlista){
        this.fezlista=fezlista;
    }
    get Fezlista(){
        return this.fezlista;
    }
    
    
    

}