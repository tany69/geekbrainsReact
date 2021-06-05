import React,{useState} from 'react';
import './css/message.css';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { TextField ,IconButton} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector, useDispatch} from 'react-redux';
import {addChat, deleteChat} from '../../store/chat/actions';


const useStyles = makeStyles ({
    root: {
        width: '100%',
        maxWidth: '360',
        backgroundColor:'#ffffff',
    },
    newMess:{
        backgroundColor:'#FFFC85',
    }

});


const ChatList = (props)=> {

    const classes = useStyles();
    const [value, setValue] = useState('');
    const chats         = useSelector(state => state.chats.chats);
    const newMessChatId = useSelector(state => state.chats.newMessChatId);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setValue(e.target.value);
    };
    const newChat = chats.length + 1;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat({name: value , chatid:newChat }));
        setValue('');
    }

    const listitem =chats.map((item, index) => {
        return (
            <Link to={`/chat/${item.chatid}`}>
               <ListItem key={item.chatid}  button className={ `${item.chatid === newMessChatId ? "classes.newMess" : ""}` } >
                   <ListItemAvatar>
                       <Avatar  src={`./pics/${item.avatar}`}/>
                   </ListItemAvatar>
                   <ListItemText id={item.chatid} primary={` ${item.name} `} />
                        <IconButton aria-label="delete" onClick={ () => { dispatch(deleteChat(item.chatid)) } }>
                        <DeleteIcon />
                </IconButton>
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