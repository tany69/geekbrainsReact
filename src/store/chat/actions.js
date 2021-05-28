export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat=(newChat)=>({
    type: ADD_CHAT,
    newChat: newChat,
});
export const deleteChat = delChatId => ({
    type: DELETE_CHAT,
    chats: delChatId,
});

