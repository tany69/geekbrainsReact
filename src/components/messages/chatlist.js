import React,{useState} from 'react';
import './css/message.css';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


const ChatList = (props)=> {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const newChat = props.chats.length + 1;
   console.log(props.chats);
   console.log(props.onAddChat);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddChat({ chatid:newChat , name: value });
        setValue('');
    }

    const listitem =props.chats.map((item, index) => {
       return (
            <Link to={`/chat/${item.chatid}`}>
               <ListItem key={item.chatid} button>
                   <ListItemAvatar>
                       <Avatar  src={`./pics/${item.avatar}`}/>
                   </ListItemAvatar>
                   <ListItemText id={item.chatid} primary={` ${item.name} `} />
               </ListItem>
            </Link>
       )
    });
    return(
        <nav className="nav">
            <List  className={classes.root}>
            {listitem}
            </List>
            <form onsubmit={handleSubmit}>
                <TextField
                onChange={handleChange}
                value={value}
                type='string'
                label='new chat...'
                margin='dense' />
                <Button variant="contained"
                color="primary"
                size='small'
                onClick={handleSubmit}>add</Button>
            </form>
        </nav>
    )
}

export default ChatList;