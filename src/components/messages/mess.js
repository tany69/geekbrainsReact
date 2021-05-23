import React, {useCallback, useEffect, useState,usePrev} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
import {Redirect, useParams} from 'react-router-dom';
//
import './css/message.css';
import AUTHORS from "./authors";
const Mess = (props)=> {
    console.log(props.chatid);
    console.log(props.initMess[props.chatid].length);
    useEffect(() => {
        let timeout;
        if (!props.initMess[props.chatid].length) { return }

        const lastMsg = props.initMess[props.chatid][props.initMess[props.chatid]?.length - 1];
        if (lastMsg.author === AUTHORS.HUMAN) {
            timeout =setTimeout(()=>{
                props.newAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
            },1500);
        }
        return ()=> clearTimeout(timeout);
    }, [props.initMess[props.chatid]]);

    if(!props.initMess[props.chatid]){
        return <Redirect to="/" />
    }
    return(
        <div className="mess">
            <MessageField messages={props.initMess} chatid = {props.chatid} />
             <MessageForm  onAddMessage={props.newAddMessage}/>
        </div>
    )
}

export default Mess;
