import React,{useState,useRef,useEffect} from 'react';
import AUTHORS from './../messages/authors';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const MessageForm = (props)=>{
    const [value, setValue] = useState('');
    const input =useRef();
    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddMessage({ author:AUTHORS.HUMAN , text: value });
        setValue('');
    }
    useEffect(()=>{
        input.current.focus();
    },[]);

    return (
      <div>

          <form onSubmit={handleSubmit}>
              <TextField
                  onChange={handleChange}
                  value={value}
                  type='string'
                  label='Your message...'
                  inputRef={input}
                  fullWidth={true}
                  margin='dense'
              />
              <Button variant="contained"
                  color="primary"
                    size='small'
                      onClick={handleSubmit}
                  >Send</Button>
          </form>
      </div>
  )
}

export default MessageForm;