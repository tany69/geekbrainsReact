import React from 'react';
import {BrowserRouter,Switch,Route,Link,useParams} from 'react-router-dom';
import App from './../app/app';
import ChatList from './../messages/chatlist';
import Mess from './../messages/mess';




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
            <Route path='/profile' exact component={Profile} />
            <Route path='/' exact component={ChatList} />
            <Route path='/chat/:chatid' exact component={App} />
        </Switch>
     </BrowserRouter>
 );
}