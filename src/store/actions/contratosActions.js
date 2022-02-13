import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_CONTRATOS = 'FETCH_CONTRATOS';

import Localhost from '../../constants/Localhost';
import Contrato from "../../model/Contrato";

export const fetchContratos = () => {
    try {
        return async (dispatch, getState) => {
            const token = getState().user.token;
            const response = await fetch(`http://${Localhost.address}:${Localhost.port}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error("Erro na busca de contratos");
            }

            const resData = await response.json();

            const loadedContracts = [];
            for (const key in resData) {
                loadedContracts.push(new Contrato(resData[key].id, resData[key].titulo,
                    resData[key].descricao, resData[key].prestador,
                    resData[key].contratante, resData[key].servico, resData[key].buscaContratante,
                    resData[key].buscaPrestador, resData[key].dataContratacao, resData[key].dataPrestacao,
                    resData[key].concluido, resData[key].confirmado, resData[key].cancelado, resData[key].parcelas,
                    resData[key].valorParcela));
            }

            dispatch({ type: FETCH_CONTRATOS, contratos: loadedContracts });
        }

    } catch (err) {
        throw err;
    };
};



