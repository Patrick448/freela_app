import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_SERVICOS = 'FETCH_SERVICOS';
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


        dispatch({type: FETCH_SERVICOS, buscaContratante: buscaContratante, listaServicos:listaServicos})


        console.log(listaServicos)
    };
};



