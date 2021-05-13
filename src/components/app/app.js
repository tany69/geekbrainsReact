import React,{useState,useCallback,useEffect} from "react";
import AUTHORS from './../messages/authors';
import ChatList from './../messages/chatlist';
import Header from './../messages/header';
import Mess from  './../messages/mess';
import './app.css';


const chatLists = [
    {id:1,name:'Марина',newMes:0,count:25,avatar:'avatarW.jpg'},
    {id:2,name:'Николай',newMes:2,count:10,avatar:'avatarM.jpg'},
    {id:3,name:'Финам',newMes:3,count:10,avatar:'avatarM.jpg'},
    {id:4,name:'Вячеслав',newMes:0,count:1,avatar:'avatarM.jpg'},
    {id:5,name:'Анастасия',newMes:1,count:1,avatar:'avatarW.jpg'}
]

const App =()=>{
    const initMess = [
        { author: AUTHORS.BOT, text: "Привет, человек!" }
       // { author: AUTHORS.HUMAN, text: "Привет" }
        ,
       ];

    //const [value,setValue] =useState('');
    // const [messages, setMessages] = useState(initMess);


    // const handleAddMessage = useCallback(newMessage => {
    //     setMessages(prevMessages => [...prevMessages, newMessage]);
    // }, []);
    //
    //
    // useEffect(() => {
    //     let timeout;
    //     if (!messages.length) { return }
    //
    //     const lastMsg = messages[messages.length - 1];
    //     if (lastMsg.author === AUTHORS.HUMAN) {
    //         timeout =setTimeout(()=>{
    //             handleAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
    //         },1500);
    //     }
    //     return ()=> clearTimeout(timeout);
    // }, [messages]);

    return(
        <div className='chat'>
            <Header/>
            <ChatList list={chatLists}></ChatList>
            <Mess initMess={initMess} />
        </div>
    )
};
export default App;

