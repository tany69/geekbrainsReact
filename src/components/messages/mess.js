import React, {useCallback, useEffect, useState,usePrev} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
//import {useParams,Route} from 'react-router-dom';
//
import './css/message.css';
import AUTHORS from "./authors";
const Mess = (props)=> {
    const [messages, setMessages] = useState(props.initMess);
    const {chatid} = props;
    // console.log("chat-"+chatid);


    const handleAddMessage = useCallback(
        newMessage => {
            setMessages(prevMessages => 
            ({...prevMessages,[chatid]:[...prevMessages, newMessage],})
            );
    }, [chatid]);

    // const params = useParams();
    // const { chatid } = params;
    console.log(chatid);
    console.log(props.initMess);

    useEffect(() => {
        let timeout;
        if (!messages[chatid].length) { return }

        const lastMsg = messages[chatid][messages[chatid].length - 1];
        if (lastMsg.author === AUTHORS.HUMAN) {
            timeout =setTimeout(()=>{
                handleAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
            },1500);
        }
        return ()=> clearTimeout(timeout);
    }, [messages[chatid]]);

    if(!chatid || !messages[chatid]){
         console.log(chatid);
        //return <redirect to="/" />
    }
    return(
        <div className="mess">
            <MessageField messages={messages[chatid]}/>
             <MessageForm  onAddMessage={handleAddMessage }/>
        </div>
    )
}

export default Mess;
