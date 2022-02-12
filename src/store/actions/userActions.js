import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';

import Localhost from '../constants/Localhost';

const encryptPassword = (senha) => {
    var CryptoJS = require('crypto-js');
    var pwhash = CryptoJS.enc.Utf8.parse('ekhilAitcapWarHy');
    var key = CryptoJS.enc.Hex.parse(pwhash.toString(CryptoJS.enc.Hex).substr(0, 32));

    var encrypted = CryptoJS.AES.encrypt(senha, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });

    var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Hex);

    return ciphertext;
};

export const authenticate = (token, id, nome, email, dataNascimento, genero, telefone, estrelas, admin) => {
    return {
        type: AUTHENTICATE,
        id: id,
        name: nome,
        email: email,
        dataNascimento: dataNascimento,
        genero: genero,
        telefone: telefone,
        estrelas: estrelas,
        admin: admin,
    };
};

export const signin = (email, senha) => {
    return async (dispatch) => {
        //const encryptedPass = encryptPassword(password);
        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    body:{
                        email: email,
                        senha:senha
                    }
                },
            }
        );

        if (!response.ok) {
            throw new Error("Senha errada.");
        }
        const token = await response.text();

        const responseUser = await fetch(
            `http://${Localhost.address}:${Localhost.port}/get-user`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!responseUser.ok) {
            throw new Error("Erro no login");
        }

        const usr = await responseUser.json();
        console.log(usr);

        /**
         * General checks to simplify future service calls
         * Check is user already have chat, record and options tables and create them.
         */

        dispatch({
            type: SIGNIN,
            id: usr.id,
            nome: usr.nome,
            email: usr.email,
            senha:usr.senha,
            dataNascimento: usr.dataNascimento,
            genero: usr.genero,
            telefone: usr.telefone,
            estrelas: usr.estrelas,
            admin: usr.admin,
            token: token,
        });
        saveDataToStorage(token, usr.id, usr.nome, usr.email, usr.senha, usr.dataNascimento, usr.genero, usr.telefone, usr.estrelas, usr.admin);
    };
};

export const signup = (jsonForm) => {
    return async (dispatch) => {

        //const encryptedPass = encryptPassword(jsonForm.senha)
        //jsonForm.senha = encryptedPass
        //console.log(jsonForm)

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/users/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: jsonForm.senha,
            }
        );

        if (!response.ok) {
            throw new Error("Problema no cadastro.");
        }

        const usr = await response.json();

        console.log(usr)
    };
};

export const logout = () => {
    return async (dispatch, getState) => {
        const token = getState().user.token;

        const response = await fetch(
            `http://${Localhost.address}:${Localhost.port}/aes/webresources/authenticate/secured/logout/${token}/`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Erro no logout.");
        }

        AsyncStorage.removeItem('userData');
        dispatch({ type: LOGOUT });
    };
};

const saveDataToStorage = (token, id, nome, email, senha, dataNascimento, genero, telefone, estrelas, admin) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            token: token,
            id: id,
            name: name,
            email: email,
            senha: senha,
            dataNascimento:dataNascimento,
            genero:genero,
            telefone:telefone,
            estrelas: estrelas,
            admin: admin,
        })
    );
};