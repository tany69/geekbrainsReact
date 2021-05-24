import React,{useState,useCallback,useEffect} from "react";
import AUTHORS from './../messages/authors';
import ChatList from './../messages/chatlist';
import Header from './../messages/header';
import Mess from './../messages/mess';
import {useParams} from 'react-router-dom';
import './app.css';




const App =()=>{
   
    const params = useParams();
    const {chatid} = params;


    const initMess = {
        1:[{ author: AUTHORS.BOT, text: "Привет, человек!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        2:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.HUMAN, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        3:[{ author: AUTHORS.BOT, text: "Привет!" },{ author: AUTHORS.BOT, text: "Как дела?"}],
        4:[],
        5:[],
    }

    const initChats = [
        {chatid:1,name:'Марина'},
        {chatid:2,name:'Николай'},
        {chatid:3,name:'Финам'},
        {chatid:4,name:'Вячеслав'},
        {chatid:5,name:'Анастасия'}
    ]

    const [messages, setMessages] = useState(initMess);
    const [chat,setChat]  = useState(initChats);


    const handleAddMessage = useCallback(
        newMessage => {
        setMessages((prevMessages) =>
    ({...prevMessages,[chatid]:[...prevMessages[chatid], newMessage],})
);
}, [chatid]);
    
    const handleAddChats = useCallback(
        newChat=>{
            console.log(newChat);
            setChat((prevChat)=> [...prevChat,newChat]);
            setMessages(prev => ({ ...prev, [chat.length + 1]: [] }))
    console.log(messages);
     },[]);
    
   console.log(chatid);
    return(
        <div className='chat'>
            <Header />
            <ChatList chats={chat} onAddChat={handleAddChats}/>
            <Mess initMess={messages} chatid={chatid} newAddMessage={handleAddMessage} />
        </div>
    )
};
export default App;

