import {ADD_CHAT, DELETE_CHAT} from './actions';
import { ADD_MESSAGE } from "./../message/actions";

const initialState = {
    chats:[
        {chatid:1,name:'Марина'},
        {chatid:2,name:'Николай'},
        {chatid:3,name:'Финам'},
        {chatid:4,name:'Вячеслав'}, 
        {chatid:5,name:'Анастасия'}
    ],
    newMessChatId:0,
};
 export const chatReduser = (state= initialState, action)=>{
    switch(action.type){
        case ADD_CHAT: {
            return{
                ...state,
                chats: [...state.chats, action.newChat],
            }
        }
        case ADD_MESSAGE:{
            return{
                ...state,
                newMessChatId: action.payload.chatid,
            }
        }
        case DELETE_CHAT: {
            const chatIndex = [...state.chats].findIndex(chat => chat.id === action.chats);

            const newChatList = [...state.chats];
              newChatList.splice(chatIndex, 1);
            return {
                ...state,
                chats: newChatList,
            }
        }
        default:
            return state;
    }

    };
