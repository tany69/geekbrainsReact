import React, {useCallback, useEffect, useState,usePrev} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
import {Redirect, useParams} from 'react-router-dom';
import './css/message.css';
import {useSelector, useDispatch} from 'react-redux';
import { addMessageWithThunk} from "./../../store/message/actions";
import AUTHORS from './../messages/authors';



const Mess = ()=> {
    const dispatch = useDispatch();
    const initMess = useSelector(state => state.message.messagesList);
    const {chatid} = useParams();
    const handleAddMessage = useCallback(
        (newMessage) => {
        dispatch(addMessageWithThunk(newMessage, chatid));
    },[chatid, dispatch]);


    
    if(!initMess[chatid]){
        return <Redirect to="/" />
    }
    return(
        <div className="mess">
            <MessageField messages={initMess} chatid = {chatid} />
             <MessageForm  onAddMessage={handleAddMessage}/>
        </div>
    )
}

export default Mess;
