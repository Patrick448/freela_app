import {
    FETCH_SERVICOS,
} from '../actions/servicosActions';

import Servico from '../../model/Servico'

const initialState = {
    servicosProcuradosFeed: null,
    servicosOferecidosFeed: null
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_SERVICOS:
            if(action.buscaContratante){
                return{
                    ...state,
                    servicosOferecidosFeed: action.listaServicos,

                };
            }else{
                return{
                    ...state,
                    servicosProcuradosFeed: action.listaServicos,
                };
            }

        default:
            return state;
    }
}