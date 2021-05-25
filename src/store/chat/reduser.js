import {ADD_CHAT} from './actions';

const initialState = {
    chats:[
        {chatid:1,name:'Марина'},
        {chatid:2,name:'Николай'},
        {chatid:3,name:'Финам'},
        {chatid:4,name:'Вячеслав'},
        {chatid:5,name:'Анастасия'}
    ]
};
 export const chatReduser = (state= initialState, action)=>{
    switch(action.type){
        case ADD_CHAT: {
            return{
                ...state,
                chats: [...state.chats, action.newChat],
            }
        }
        default:
            return state;
    };

}