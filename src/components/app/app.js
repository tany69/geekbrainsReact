import React,{useState,useCallback,useEffect} from "react";
import ChatList from './../messages/chatlist';
import Mess from './../messages/mess';
import {useParams} from 'react-router-dom';
import './app.css';
import Header from './../messages/header';


const App =()=>{

    return(
        <div className='chat'>
            <Header  />
            <ChatList  />
            <Mess />
        </div>
    )
};
export default App;