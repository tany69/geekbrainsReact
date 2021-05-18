import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import App from './../app/app';
import ChatList from './../messages/chatlist';

const Profile = ()=>{
    return(
        <h1>This is profile page! </h1>

    )
}
export const Routes= ()=>{

 return(
     <BrowserRouter>
        <Switch>
            <Route path='/profile' exact component={Profile} />
            <Route path='/' exact component={App} />
        
        </Switch>
     </BrowserRouter>
 );
}