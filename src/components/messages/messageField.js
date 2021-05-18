import React,{useState, useEffect,useCallback} from 'react';
import './css/message.css';



 const MessageField =(props)=>{
     const messageRender = props.messages[chatid].map((message, index) => (
     <li  key={ index } className={`${message.author === 'Bot'? "item-bot":"item-humen"}`}>{message.author}: {message.text }</li>
     ));
     return (<ul>{messageRender}</ul>) ;

};

export default MessageField;