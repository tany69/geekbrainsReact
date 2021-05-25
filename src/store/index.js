import {createStore, combineReducers} from 'redux';
import {profileReduser} from './profile/reduser';
import {chatReduser} from './chat/reduser';
import { messagesReducer} from './message/reduser';

 export const store= createStore(
     combineReducers({
         chats:chatReduser,
         message:messagesReducer,
     }),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

 );

