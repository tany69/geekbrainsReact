import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './../app/app';
import ChatList from './../messages/chatlist';
import {Profile} from './../messages/profile';
import {Articles} from './../articles';
import {AnimeNews} from './../anime/';







export const Routes= ()=>{

 return(
     <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/articles' exact component={Articles} />
            <Route path='/animenews' exact component={AnimeNews} />
            <Route path='/chat/:chatid?' exact component={App} />
        </Switch>
     </BrowserRouter>
 );
}