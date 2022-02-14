class DadosPagamentoNovo {
    constructor(nomeTitular, numero, validade, cvv, parcelas, valorParcela, usuario) {
        this.nomeTitular = nomeTitular;
        this.numero = numero;
        this.validade = validade;
        this.cvv = cvv;
        this.parcelas = parcelas;
        this.valorParcela = valorParcela;
        this.usuario = usuario;
    }
}

export default DadosPagamentoNovo;