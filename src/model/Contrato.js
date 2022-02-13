class Contrato{
    constructor(id, titulo, descricao) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.prestador = prestador;
        this.contratante = contratante;
        this.servico = servico;
        this.buscaContratante = buscaContratante;
        this.buscaPrestador = buscaPrestador;
        this.dataContratacao = dataContratacao;
        this.dataPrestacao = dataPrestacao;
        this.concluido = concluido;
        this.confirmado = confirmado;
        this.cancelado = cancelado;
        this.parcelas = parcelas;
        this.valorParcela = valorParcela;
    }
}

export default Contrato;