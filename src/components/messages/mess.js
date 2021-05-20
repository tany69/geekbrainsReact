import React, {useCallback, useEffect, useState,usePrev} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
//import {useParams,Route} from 'react-router-dom';
//
import './css/message.css';
import AUTHORS from "./authors";
const Mess = (props)=> {
    
    useEffect(() => {
        let timeout;
        if (!props.initMess.length) { return }

        const lastMsg = props.initMess[props.initMess.length - 1];
        if (lastMsg.author === AUTHORS.HUMAN) {
            timeout =setTimeout(()=>{
                props.newAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
            },1500);
        }
        return ()=> clearTimeout(timeout);
    }, [props.initMess]);

    if(!props.initMess){
        return <redirect to="/" />
    }
    return(
        <div className="mess">
            <MessageField messages={props.initMess}/>
             <MessageForm  onAddMessage={props.newAddMessage}/>
        </div>
    )
}

export default Mess;
