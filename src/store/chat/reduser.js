initState = {
    chatList:[
        {chatid:1,name:'Марина'},
        {chatid:2,name:'Николай'},
        {chatid:3,name:'Финам'},
        {chatid:4,name:'Вячеслав'},
        {chatid:5,name:'Анастасия'}
    ],
};
const chatReduser= (initState, action)=>{
    switch(action.type){
        case ADD_CHAT :{
            return(
                ...state,
                chatList:[...state.chatList,action.newChat],
            )
        }
    }
}