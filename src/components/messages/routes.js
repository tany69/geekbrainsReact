import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './../app/app';
import ChatList from './../messages/chatlist';
import Header from './../messages/header';




const Profile = ()=>{
    return(
        <div>
        <h1>This is profile page! </h1>
    </div>
)
}

export const Routes= ()=>{

 return(
     <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/chat/:chatid' exact component={App} />
        </Switch>
     </BrowserRouter>
 );
}