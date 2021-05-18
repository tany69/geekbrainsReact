import React,{useState,useCallback,useEffect} from "react";
import AUTHORS from './../messages/authors';
import ChatList from './../messages/chatlist';
import Header from './../messages/header';
import Mess from './../messages/mess';
import './app.css';
import {Route} from 'react-router-dom';



const App =()=>{
    const initMess = {
        1: [{author: AUTHORS.BOT, text: "Привет, человек!"}],
        2: [{author: AUTHORS.BOT, text: "Привет, человек!"},
            {author: AUTHORS.BOT, text: "Как тебя зовут?"}],
        3: [{author: AUTHORS.BOT, text: "Привет, человек!"},
            {author: AUTHORS.BOT, text: "Привет, друг!"},
            {author: AUTHORS.BOT, text: "Сколько тебе лет?"}]
    };

    return(
        <div className='chat'>
            <Header/>
            <Route path='/' exact component={ChatList} />
            <Mess initMess={initMess} />
        </div>
    )
};
export default App;

