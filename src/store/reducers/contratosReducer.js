import {
    FETCH_CONTRATOS,
} from '../actions/contratosActions';

import Servico from '../../model/Servico'

const initialState = {
    contratos: []
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_CONTRATOS:
            return{
                ...state,
                contratos: action.contratos,
            };
        default:
            return state;
    }
}