import {
    FETCH_CONTRATOS, FETCH_CONTRATOS_USUARIO_ATUAL,
} from '../actions/contratosActions';

import Servico from '../../model/Servico'

const initialState = {
    contratos: [],
    historico:[]
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_CONTRATOS:
            return{
                ...state,
                contratos: action.contratos,
            };
        case FETCH_CONTRATOS_USUARIO_ATUAL:
            return{
                ...state,
                historico: action.contratos,
            };
        default:
            return state;
    }
}