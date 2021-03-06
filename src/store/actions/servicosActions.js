import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_SERVICOS = 'FETCH_SERVICOS';
export const FETCH_SERVICOS_USUARIO_ATUAL = 'FETCH_SERVICOS_USUARIO_ATUAL';
export const LOAD_MORE_SERVICOS = 'LOAD_MORE_SERVICOS';
export const CREATE_SERVICO = 'CREATE_SERVICO';


import Localhost from '../../constants/Localhost';


export const fetchServicosUsuarioAtual = () => {
    return async (dispatch, getState) => {
        const token = getState().user.token;

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/services/current-user`,
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

        const listaServicos = await response.json();

        dispatch({type: FETCH_SERVICOS_USUARIO_ATUAL, listaServicos:listaServicos})

console.log("Terminou " + FETCH_SERVICOS_USUARIO_ATUAL)
        console.log(listaServicos)
        console.log("...")
    };
};

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
    return async (dispatch, getState) => {
        const token = getState().user.token;


        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/services/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(servico),

            }
        );

        if (!response.ok) {
            throw new Error("Erro ao registrar servi??o");
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


