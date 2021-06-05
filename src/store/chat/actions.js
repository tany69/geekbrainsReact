export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const HIGHTLIGHT_CHAT = "CHATS::HIGHTLIGHT_CHAT";

export const addChat=(newChat)=>({
    type: ADD_CHAT,
    newChat: newChat,
});
export const deleteChat = delChatid => ({
    type: DELETE_CHAT,
    chats: delChatid,
});

export const NewMessChatId =chatid => ({
    type: HIGHTLIGHT_CHAT,
    payload: chatid,
});

