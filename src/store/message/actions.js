import  AUTHORS  from "./../../components/messages/authors";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatid) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatid:chatid,
    },
});

let timeout;

export const addMessageWithThunk = (newMessage, chatid) => (dispatch) => {
    dispatch(addMessage(newMessage, chatid));

    if (newMessage.author !== AUTHORS.BOT) {
        timeout = setTimeout(() => {
            dispatch(addMessage({ text: `Как дела, ${newMessage.author}?`, author: AUTHORS.BOT }, chatid));
    }, 3000);

    }
};
