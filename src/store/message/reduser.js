import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chat/actions";
import  AUTHORS  from "./../../components/messages/authors";


const initialState = {
    messagesList: {
        1:[{ author: AUTHORS.BOT, text: "Привет, человек!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        2:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        3:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        4:[],
        5:[],
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.chatid]: [
                        ...state.messagesList[action.payload.chatid],
                    action.payload.message,
                     ],
                },
            };
        }
        case ADD_CHAT: {
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.payload.chatid]: [],
                }
            };
        }
        default:
            return state;
    }
};