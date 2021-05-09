import React from 'react';
import PropTypes from 'prop-types';

const Message = ()=>{
    static  PropTypes= {
        text: PropTypes.string.isRequired
    };
    render(){
        return <div>{props.text}</div>
    }
}
export  default Message;