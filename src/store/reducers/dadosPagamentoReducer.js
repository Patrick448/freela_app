import {
    FETCH_DADOS_PAGAMENTO,
} from '../actions/dadosPagamentoActions';

import DadosPagamento from '../../model/DadosPagamento'

const initialState = {
    dadosPagamento: null
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_DADOS_PAGAMENTO:
            return{
                ...state,
                dadosPagamento: action.dadosPagamento,
            };
        default:
            return state;
    }
}