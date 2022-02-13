import {
    FETCH_SERVICOS, LOAD_MORE_SERVICOS,
} from '../actions/servicosActions';

import Servico from '../../model/Servico'

const initialState = {
    servicosProcurados:{
        lista:null,
        pagina:0,
        numPaginas:0
    },
    servicosOferecidos:{
        lista:null,
        pagina:0,
        numPaginas: 0
    },

}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_SERVICOS:
            if(action.buscaContratante){
                return{
                    ...state,
                    servicosOferecidos:{
                        lista:action.listaServicos,
                        pagina:action.pagina,
                        numPaginas: action.numPaginas
                    }

                };
            }else{
                return{
                    ...state,
                    servicosProcurados:{
                        lista:action.listaServicos,
                        pagina:action.pagina,
                        numPaginas: action.numPaginas

                    },
                };
            }

        case LOAD_MORE_SERVICOS:
            if(action.buscaContratante){
                return{
                    ...state,
                    servicosOferecidos:{
                        lista:[...state.servicosOferecidos.lista, ...action.listaServicos],
                        pagina:action.pagina,
                        numPaginas: action.numPaginas
                    }

                };
            }else{

                return{
                    ...state,
                    servicosProcurados:{
                        lista:[...state.servicosProcurados.lista, ...action.listaServicos],
                        pagina:action.pagina,
                        numPaginas: action.numPaginas

                    },
                };
            }

        default:
            return state;
    }
}