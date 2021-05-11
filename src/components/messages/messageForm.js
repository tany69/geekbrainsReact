import React,{useState,useCallback} from 'react';
import AUTHORS from './../messages/authors';

const MessageForm = (props)=>{
    const [value, setValue] = useState('');
    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.preventDefault());
        props.onAddMessage({ author:AUTHORS.HUMAN , text: value });
        setValue('');
    }

    return (
      <div>
          {/*<MessageField onAddMessage={ handleAddMessage }*/}
          <form onSubmit={handleSubmit}>
              <input type='text' name='formtext' value={value}  onChange={handleChange}/>
              <input type='submit' value='отправить'/>
          </form>
      </div>
  )
}

export default MessageForm;