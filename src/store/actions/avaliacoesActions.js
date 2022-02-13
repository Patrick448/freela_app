import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_AVALIACOES = 'FETCH_AVALIACOES';

import Localhost from '../../constants/Localhost';
import Avaliacao from "../../model/Avaliacao";

export const fetchAvaliacoes = () => {
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
                throw new Error("Erro na busca de avaliacoes");
            }

            const resData = await response.json();

            const loadedEvaluations = [];
            for (const key in resData) {
                loadedEvaluations.push(new Avaliacao(resData[key].id, resData[key].estrelas,
                    resData[key].texto, resData[key].data,
                    resData[key].servico))
            }

            dispatch({ type: FETCH_AVALIACOES, avaliacoes: loadedEvaluations });
        }

    } catch (err) {
        throw err;
    };
};



