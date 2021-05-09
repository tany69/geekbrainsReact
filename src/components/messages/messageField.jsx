import React,{useState} from 'react';
import Message from './message';

const MessageField =()=>{
    const mess_arr =["������!","��� ����?"];
    const [state,setState] = useState(mess_arr);

    const  handleClick =()=>{
        setState ([...state,'���������'])
    };
    render(){
        const  messageElement = setState.map((text,index)=>{
         <Message key ={index} text ={text}/>
        });
        return(
            <div>
                {messageElement}
                <button onClick={handleClick}>��������� ���������</button>
            </div>
        )
    }
};
export default MessageField;