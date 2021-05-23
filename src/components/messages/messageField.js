import React,{useState, useEffect,useCallback} from 'react';
import './css/message.css';
import {useParams} from 'react-router-dom';



 const MessageField =({messages,chatid})=>{



     const messageRender = messages[chatid]?.map((message, index) => (
     <li  key={ index } className={`${message.author === 'Bot'? "item-bot":"item-humen"}`}>{message.author}: {message.text }</li>
     ));
     return (<ul>{messageRender}</ul>) ;

};

export default MessageField;