import {
    AUTHENTICATE,
    LOGOUT, SIGNIN,
    RESET_PASSWORD,
    SET_DID_TRY_LOGIN
} from '../actions/userActions';

import Usuario from '../../model/Usuario';

const initialState = {
    token: null,
    currentUser: null,
    didTryAutoLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                token: action.token,
                currentUser: new Usuario(
                    action.id,
                    action.name,
                    action.email,
                    action.senha,
                    action.dataNascimento,
                    action.genero,
                    action.telefone,
                    action.estrelas,
                    action.admin,
                ),
            };
        case AUTHENTICATE:
            return {
                ...state,
                token: action.token,
                currentUser: new Usuario(
                    action.id,
                    action.name,
                    action.email,
                    action.senha,
                    action.dataNascimento,
                    action.genero,
                    action.telefone,
                    action.estrelas,
                    action.admin,
                ),
                didTryAutoLogin: true
            };

        case SET_DID_TRY_LOGIN:
            return {
                ...state,
                didTryAutoLogin: true
            };
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: true
            };

        case RESET_PASSWORD:
            return state;
        default:
            return state;
    }
};
