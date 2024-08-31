module.exports = class Professor{

    constructor(banco){
        this._banco = banco;
        this.registro=null;
        this.nome=null;
        this.email=null;
        this.senha=null;
        this.tipo=null;
    }

    async login(){
        const operacao = new Promise((resolve, reject)=>{
            const email = this.email;
        const senha = this.senha;

        const parametros = [email, senha];
        const sql = "select COUNT(*) as qtd, tipo from professor where email=? and senha = md5(?);"
        this._banco.query(sql, parametros, (erro, resposta)=>{
            if(erro){
                console.log(erro);
                reject (erro)
            }else{
                if(resposta[0].qtd>0){
                    const obj = {
                        status:true,
                        dados:{
                        registro:resposta[0].registro,
                        nome:resposta[0].nome,
                        tipo:resposta[0].tipo
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


    async create(){
            const promise = new Promise((resolve, reject) => {
                const registro = this.registro
                const nome = this.nome
                const email = this.email
                const senha = this.senha
                const tipo = this.tipo
                let parametros = [registro, nome, email, senha, tipo];
                let sql = "INSERT INTO professor (registro, nome, email, senha, tipo) VALUES (?,?,?,md5(?),?);";
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
            let sql = "select * from professor;";
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


async update(){
    const promise = new Promise((resolve, reject) => {
        const registro = this.registro
        const nome = this.nome
        const email = this.email
        const senha = this.senha
        const tipo = this.tipo

        let parametros = [nome, email, senha, tipo, registro];
        let sql = "UPDATE professor SET nome=?, email=?, senha=?, tipo=? WHERE registro=?;"
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

async delete(){
    const promise = new Promise((resolve, reject) => {
        const registro = this.registro;

        let parametros = [ registro];
        let sql = "DELETE FROM professor WHERE registro=?;"
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

    set banco(valor){
        this._banco=valor;
    }
    get banco(){
        return this._banco;
    }

    set Email(email) {
        this.email = email;
    }
    get Email() {
        return this.email;
    }

    set Registro(registro) {
        this.registro = registro;
    }
    get Registro() {
        return this.registro;
    }

    set Nome(nome) {
        this.nome = nome;
    }
    get Nome() {
        return this.nome;
    }

    set Senha(senha) {
        this.senha = senha;
    }
    get Senha() {
        return this.senha;
    }

    set Tipo(tipo){
        this.tipo = tipo;
    }
    get Tipo(){
        return tipo;
    }

}