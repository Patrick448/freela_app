import {
    FETCH_CHATS,
} from '../actions/chatActions';

import Chat from '../../model/Chat'

const initialState = {
    chats: []
}

export default (state = initialState, action) =>{

    switch (action.type){
        case FETCH_CHATS:
            return{
                ...state,
                chats: action.chats,
            };
        default:
            return state;
    }
}