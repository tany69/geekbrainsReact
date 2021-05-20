import React,{useState,useCallback,useEffect} from "react";
import AUTHORS from './../messages/authors';
import ChatList from './../messages/chatlist';
import Header from './../messages/header';
 import Mess from './../messages/mess';
import {useParams} from 'react-router-dom';
import './app.css';




const App =()=>{
    // const initMess = [
    //     { author: AUTHORS.BOT, text: "Привет, человек!" }
    //     // { author: AUTHORS.HUMAN, text: "Привет" }
    //     ,
    // ];
    const params = useParams();
    const {chatid} = params;
    console.log(params);

    const initMess = {
        1:[{ author: AUTHORS.BOT, text: "Привет, человек!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        2:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        3:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}]
    }

    const [messages, setMessages] = useState(initMess);

    const handleAddMessage = useCallback(
        newMessage => {
        setMessages((prevMessages) =>
    ({...prevMessages,[chatid]:[...prevMessages[chatid], newMessage],})
);
}, [chatid]);
    

    return(
        <div className='chat'>
            <Header/>
            <ChatList />
            <Mess initMess={messages[chatid]} newAddMessage={handleAddMessage} />
        </div>
    )
};
export default App;

