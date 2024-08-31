module.exports = class Aluno{
    constructor(banco){
        this._banco = banco;
        this.matricula = null;
        this.nome = null;
        this.email = null;
        this.wpp = null;
        this.senha = null;
    }
    async login(){
        const operacao = new Promise((resolve, reject)=>{
            const email = this.email;
        const senha = this.senha;

        const parametros = [email, senha];
        const sql = "select COUNT(*) as qtd, matricula, nome from aluno where email=? and senha = md5(?);"
        this._banco.query(sql, parametros, (erro, resposta)=>{
            if(erro){
                console.log(erro);
                reject (erro)
            }else{
                if(resposta[0].qtd>0){
                    const obj = {
                        status:true,
                        dados:{
                        matricula:resposta[0].matricula,
                        nome:resposta[0].nome,
                        wpp:resposta[0].wpp
                        }
                        
                    }
                    resolve(obj)
                }else{
                    const obj = {
                        status:false,
                        registro:resposta[0].registro,
                        nome:resposta[0].nome,
                        tipo:resposta[0].tipo
                    }
                    resolve(obj)
                }
                resolve(resposta)
            }
        })

        });
        return operacao;
    }


    async create() {
        const promise = new Promise((resolve, reject) => {
            const matricula = this.matricula
            const nome = this.nome
            const email = this.email
            const wpp = this.wpp
            const senha = this.senha
            let parametros = [matricula,nome,email,wpp, senha];
            let sql = "INSERT INTO aluno (matricula,nome,email,wpp, senha) VALUES (?,?,?,?, md5(?));";
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
            let sql = "select * from aluno";

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
            const matricula = this.matricula
            const nome = this.nome
            const email = this.email
            const wpp = this.wpp
            const senha = this.senha

            let parametros = [nome,email,wpp,senha, matricula]
            let sql = "UPDATE aluno SET nome=?, email=?, wpp=?, senha=? WHERE matricula=?;"
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
            const matricula = this.matricula
            let parametros = [matricula]
            let sql = "DELETE FROM aluno WHERE matricula=?;"

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
    set Matricula(matricula){
        this.matricula=matricula;
    }
    get Matricula(){
        return this.matricula;
    }

    set Nome(nome){
        this.nome=nome;
    }
    get Nome(){
        return this.nome;
    }

    set Email(email){
        this.email=email;
    }
    get Email(){
        return this.email;
    }

    set Wpp(wpp){
        this.wpp=wpp;
    }
    get Wpp(){
        return this.wpp;
    }

    set Senha(senha){
        this.senha=senha;
    }
    get Senha(){
        return this.senha;
    }
    

}