initState = {
    chatList:[
        {chatid:1,name:'������'},
        {chatid:2,name:'�������'},
        {chatid:3,name:'�����'},
        {chatid:4,name:'��������'},
        {chatid:5,name:'���������'}
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