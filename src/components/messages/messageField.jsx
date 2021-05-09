import React,{useState} from 'react';
import Message from './message';

 const MessageField =()=>{
    const mess_arr =["Привет!","Как дела?"];
    const [state,setState] = useState(mess_arr);

    const  handleClick =()=>{
        setState ([...state,'Нормально'])
    };
    render(){
        const  messageElement = setState.map((text,index)=>{
         <Message key ={index} text ={text}/>
        });
        return(
            <div>
                {messageElement}
                <button onClick={handleClick}>отправить сообщение</button>
            </div>
        )
    }
};
export default MessageField;