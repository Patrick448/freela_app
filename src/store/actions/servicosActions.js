import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_SERVICOS = 'FETCH_SERVICOS';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';

import Localhost from '../../constants/Localhost';

export const fetchServicos = (num) => {
    return async (dispatch, getState) => {
        const token = getState().user.token;

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/services?page=0&size=${num}&sort=data,desc`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error("Problema ao carregar servicos.");
        }

        const listaServicos = await response.json();

        dispatch({type: FETCH_SERVICOS, listaServicos:listaServicos})

        console.log(usr)
    };
};



