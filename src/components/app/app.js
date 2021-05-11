import React,{useState,useCallback,useEffect} from "react";
import MessageField from './../messages/messageField';
import MessageForm from './../messages/messageForm';
import AUTHORS from './../messages/authors';
import './app.css';


const App =()=>{
    const initMess = [
        { author: AUTHORS.BOT, text: "Привет, человек!" }
       // { author: AUTHORS.HUMAN, text: "Привет" }
        ,
       ];

    const [value,setValue] =useState('');
    const [messages, setMessages] = useState(initMess);


    const handleAddMessage = useCallback(newMessage => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
    }, []);


    useEffect(() => {
        if (!messages.length) { return }

        const lastMsg = messages[messages.length - 1];
        if (lastMsg.author === AUTHORS.HUMAN) {
            handleAddMessage({ author: AUTHORS.BOT, text:`Как дела,${lastMsg.author}?`})
        }
    }, [messages]);

    return(
        <div className='chat'>
            <h1> Чат с ботом</h1>
            <MessageField messages={messages}/>
            <MessageForm  onAddMessage={ handleAddMessage }/>
        </div>
    )
};
export default App;

