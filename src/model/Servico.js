class Servico {
    constructor(id, titulo, descricao, anuncianteId, buscaContratante, buscaPrestador, data, local, preco) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.anuncianteId = anuncianteId;
        this.buscaContratante = buscaContratante;
        this.buscaPrestador = buscaPrestador;
        this.data = data;
        this.local = local;
        this.preco = preco;
    }

}

export default Servico;