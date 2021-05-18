import React from 'react';
import './css/message.css';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
const chats = [
    {chatid:1,name:'Марина',newMes:0,count:25,avatar:'avatarW.jpg'},
    {chatid:2,name:'Николай',newMes:2,count:10,avatar:'avatarM.jpg'},
    {chatid:3,name:'Финам',newMes:3,count:10,avatar:'avatarM.jpg'},
    {chatid:4,name:'Вячеслав',newMes:0,count:1,avatar:'avatarM.jpg'},
    {chatid:5,name:'Анастасия',newMes:1,count:1,avatar:'avatarW.jpg'}
]

const ChatList = ()=> {
    const classes = useStyles();
    const listitem =chats.map((item, index) => {
       return (
           <Link to={`/chat/${item.chatid}`}>
               <ListItem key={item.chatid} button>
                   <ListItemAvatar>
                       <Avatar  src={`./pics/${item.avatar}`}/>
                   </ListItemAvatar>
                   <ListItemText id={item.chatid} primary={` ${item.name} (${item.newMes}/${item.count})`} />
               </ListItem>
           </Link>
       )
    });
    return(
        <nav className="nav">
            <List  className={classes.root}>
            {listitem}
            </List>
        </nav>
    )
}

export default ChatList;