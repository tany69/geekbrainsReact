import React, {useCallback, useEffect, useState} from 'react';
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';

import './css/message.css';
import AUTHORS from "./authors";
const Mess = (props)=> {
    const [messages, setMessages] = useState(props.initMess);
    const handleAddMessage = useCallback(newMessage => {
        setMessages(prevMessages => ({...prevMessages,[chatid]:[...prevMessages[chatid], newMessage]}));
    }, [chatid]);

    const params = useParams();
    const { chatid } = params;
    
    useEffect(() => {
        let timeout;
        if (!messages.length) { return }

        const lastMsg = messages[chatid][messages[chatid].length - 1];
        if (lastMsg.author === AUTHORS.HUMAN) {
            timeout =setTimeout(()=>{
                handleAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
            },1500);
        }
        return ()=> clearTimeout(timeout);
    }, [messages]);

    if(!chatid || !messages[chatid]){
        return <redirect to="/" />
    }
    return(
        <div className="mess">
            <MessageField messages={messages}/>
            <MessageForm  onAddMessage={handleAddMessage }/>
        </div>
    )
}

export default Mess;
