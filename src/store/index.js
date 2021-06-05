import {createStore, combineReducers,applyMiddleware} from 'redux';
import {profileReduser} from './profile/reduser';
import {chatReduser} from './chat/reduser';
import { messagesReducer} from './message/reduser';
import { articleReduser} from './articles' ;
import { animeReduser} from './anime/reduser' ;
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {createBrowserHistory} from 'history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessager',
    storage,
}
const rootReducer = combineReducers(
    {
        chats:chatReduser,
        message:messagesReducer,
        article:articleReduser,
        anime:animeReduser,
    }
)
export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer);
 export const store= createStore(
     persistedReducer,
     composeEnhancers(applyMiddleware(thunk))
 );

export const persistor = persistStore(store);


