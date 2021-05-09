import React,{useState} from 'react';
import Message from './message';

 const MessageField =()=>{
    const mess_arr =["Привет!","Как дела?"];
    const [state,setState] = useState(mess_arr);

    const  handleClick =()=>{
        setState ([...state,'Нормально'])
    };
    console.log(state);
     const  messageElement = state.map((text,index)=>{
         return <Message key ={index} text ={text}/>

     });
        return(

            <div>
                {messageElement}
                <button onClick={handleClick}>отправить сообщение</button>
            </div>
        )
    }

export default MessageField;