import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_DADOS_PAGAMENTO = 'FETCH_DADOS_PAGAMENTO';

import Localhost from '../../constants/Localhost';
import DadosPagamento from "../../model/DadosPagamento";

export const fetchDadosPagamento = () => {
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
                throw new Error("Erro na busca de dados de pagamento");
            }

            const resData = await response.json();

            let loadedDadosPagamento;

            loadedDadosPagamento = new DadosPagamento(resData.id, resData.nomeTitular, resData.numero, resData.validade,
                resData.cvv, resData.parcelas, resData.valorParcela, resData.usuario)

            dispatch({ type: FETCH_DADOS_PAGAMENTO, dadosPagamento: loadedDadosPagamento });
        }

    } catch (err) {
        throw err;
    };
};



