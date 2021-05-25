import React, {useCallback, useEffect, useState,usePrev} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
import {Redirect, useParams} from 'react-router-dom';
import './css/message.css';
import {useSelector, useDispatch} from 'react-redux';
import { addMessage} from "./../../store/message/actions";
import AUTHORS from './../messages/authors';


const Mess = ()=> {
    const dispatch = useDispatch();
    const initMess = useSelector(state => state.message.messagesList);
    const {chatid} = useParams();

    const handleAddMessage = useCallback(
        (newMessage) => {
        dispatch(addMessage(newMessage, chatid));
    },[chatid, dispatch]);

    useEffect(() => {
        let timeout;
    if (!initMess[chatid]?.length) { return }

    const lastMsg = initMess[chatid][initMess[chatid]?.length - 1];
    if (lastMsg.author === AUTHORS.HUMAN) {
        timeout =setTimeout(()=>{
            dispatch(addMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`}, chatid))
        },1500);
    }
    return ()=> clearTimeout(timeout);
}, [initMess[chatid]]);
    
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
