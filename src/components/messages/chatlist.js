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
import {useSelector, useDispatch} from 'react-redux';
import {addChat} from '../../store/chat/actions';




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
    const chats = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();


    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const newChat = chats.length + 1;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat({ chatid:newChat , name: value }));
        setValue('');
    }

    const listitem =chats.map((item, index) => {
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
            <form onSubmit={handleSubmit} >
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