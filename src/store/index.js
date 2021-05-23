import {createStore, combineReducers} from 'redux';
import {profileReduser} from './profile/reduser';
import {chatReduser} from './chat/reduser';

const rootReduser= combineReducers({
    profile:profileReduser,
    chat:chatReducer
})

 export const store= createStore(
     rootReduser,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

