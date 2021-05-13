import React from 'react';
import './css/message.css';
import { makeStyles } from '@material-ui/core/styles';
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

const ChatList = ({list})=> {
    const classes = useStyles();
    const listitem =list.map((item, index) => {
       return (
           <ListItem key={index} button>
               <ListItemAvatar>
                   <Avatar
                       src={`pics/${item.avatar}`}
                   />
               </ListItemAvatar>
               <ListItemText id={item.id} primary={` ${item.name} (${item.newMes}/${item.count})`} />
           </ListItem>
       )
           // <li key={ index }> {item.name}&nbsp; ({item.newMes}/{item.count}) </li>
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