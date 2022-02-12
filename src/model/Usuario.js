
class Usuario{
    constructor(id, nome, email, senha, dataNascimento, genero, telefone,estrelas,  admin) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataNascimento = dataNascimento;
    this.genero = genero;
    this.telefone = telefone;
    this.estrelas = estrelas;
    this.admin = admin;
}
}

export default Usuario;