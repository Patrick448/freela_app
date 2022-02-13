import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH_CHATS = 'FETCH_CHATS';

import Localhost from '../../constants/Localhost';
import Chat from "../../model/Chat";

export const fetchChats = () => {
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
                throw new Error("Erro na busca de chats");
            }

            const resData = await response.json();

            const loadedChats = [];
            for (const key in resData) {
                loadedChats.push(new Chat(resData[key].id, resData[key].dataInicio));
            }

            dispatch({ type: FETCH_CHATS, chats: loadedChats });
        }

    } catch (err) {
        throw err;
    };
};



