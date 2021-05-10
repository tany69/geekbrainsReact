import React,{useState, useEffect,useCallback} from 'react';
import Message from './message';

 const MessageField =()=>{
  const AUTHORS = {
         USER: 'USER',
         BOT: 'Bot',
     }
    const  initMessages =[
        {autor:AUTHORS.BOT,text:'Привет,USER!'},
        {autor:AUTHORS.USER,text:'Привет)'}
    ];
    const [value,setValue] =useState('');
    const [messages, setMessages] = useState(initMessages);

     const handleClick = (e) => {
         e.preventDefault();
         onAddMessage({ author: AUTHORS.USER, text: value });
         setValue('');
     }
     const handleChange = (e)=>{
         setValue(e.target.value);
     };
     const handleAddMessage = useCallback(newMessage => {
         setMessages(prevMessages => [...prevMessages, newMessage]);
     }, []);

     useEffect(() => {
         if (!messages.length) { return }

         const lastMsg = messages[messages.length - 1];
         if (lastMsg.author === AUTHORS.USER) {
             handleAddMessage({ author: AUTHORS.BOT, text:`Hi,${lastMsg.author}`})
         }
     }, [messages]);

     const messageRender = messages.map((message, index) => (
         <li  key={ index }>{ message.author }: { message.text }</li>
     ));


    return(
        <div>
          <ul>
            {messageRender}
          </ul>
            <MessageField onAddMessage={ handleAddMessage } />
            <input type="text" name = "usertext" size='20' id="usertext" value={value} onChange={handleChange} />
            <button onClick={handleClick}>отправить сообщение</button>
        </div>
    )
};

export default MessageField;