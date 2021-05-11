import React,{useState, useEffect,useCallback} from 'react';
import './../messages/message.css';



 const MessageField =(props)=>{
     const messageRender = props.messages.map((message, index) => (
         <li  key={ index }>{message.author}: {message.text }</li>
     ));
     return (<ul>{messageRender}</ul>) ;

};

export default MessageField;