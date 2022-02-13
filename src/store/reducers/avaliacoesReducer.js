import {
    FETCH_AVALIACOES,
} from '../actions/avaliacoesActions';

import Avaliacao from '../../model/Avaliacao'

const initialState = {
    avaliacoes: []
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_AVALIACOES:
            return{
                ...state,
                avaliacoes: action.avaliacoes,
            };
        default:
            return state;
    }
}