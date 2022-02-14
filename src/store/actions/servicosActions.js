import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_SERVICOS = 'FETCH_SERVICOS';
export const LOAD_MORE_SERVICOS = 'LOAD_MORE_SERVICOS';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';

import Localhost from '../../constants/Localhost';

export const fetchServicos = (num, buscaContratante) => {
    console.log(FETCH_SERVICOS);
    return async (dispatch, getState) => {
        const token = getState().user.token;

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/services?page=0&size=${num}&sort=data,desc&buscaContrante=${buscaContratante}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log(JSON.stringify(response));

        if (!response.ok) {
            throw new Error("Problema ao carregar servicos.");
        }

        const pagedResponse = await response.json();
        const listaServicos = pagedResponse.content;
        const pageNumber = pagedResponse.pageable.pageNumber;
        const pages = pagedResponse.totalPages;


        dispatch({type: FETCH_SERVICOS, buscaContratante: buscaContratante, pagina:0, numPaginas: pages, listaServicos:listaServicos})


        console.log(listaServicos)
    };
};

export const registrarServico = (servico) => {
    return async (dispatch) => {

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(servico),

            }
        );

        if (!response.ok) {
            throw new Error("Erro ao registrar serviço");
        }

        const serv = await response.json();

        console.log(serv)
    };
};

export const loadMoreServicos = (num, buscaContratante) => {
    return async (dispatch, getState) => {
        const token = getState().user.token;

        //console.log(getState());
        const paginaAtual = (buscaContratante?  getState().servicos.servicosOferecidos.pagina : getState().servicos.servicosProcurados.pagina);


        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/services?page=${paginaAtual+1}&size=${num}&sort=data,desc&buscaContrante=${buscaContratante}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );


        //console.log(JSON.stringify(response));

        if (!response.ok) {
            throw new Error("Problema ao carregar servicos.");
        }

        const pagedResponse = await response.json();
        const listaServicos = pagedResponse.content;
        const pageNumber = pagedResponse.pageable.pageNumber;
        const pages = pagedResponse.totalPages;
        //console.log("carrrega mais> resposta:")
        //console.log(pagedResponse);


        dispatch({type: LOAD_MORE_SERVICOS, buscaContratante: buscaContratante, pagina: pageNumber, numPaginas: pages, listaServicos:listaServicos})

        //console.log(listaServicos)
        //console.log(getState());
        //console.log("aaaaaaa")

    };
};


