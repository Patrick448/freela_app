import {
    FETCH_SERVICOS,
} from '../actions/servicosActions';

import Servico from '../../model/Servico'

const initialState = {
    servicosFeed: null
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_SERVICOS:
            return{
                ...state,
                servicosFeed: action.listaServicos
            };
        default:
            return state;
    }
}