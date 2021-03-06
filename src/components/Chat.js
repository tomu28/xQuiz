import React, { useEffect, useState, Component } from 'react';
import ChatApp from './ChatApp';
// Material-UI
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
    },
});

function Chat(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const changeRoutePath = (e, link) => {
        e.preventDefault();
        props.history.push(link);
    };

    // TODO: footerのSelected Colorが合わない場合があるため、valueのStateをHomeコンポーネントと結びつけること
    return (
        <div>
            <h2>Chat</h2>
            <ChatApp></ChatApp>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Quiz"
                    icon={<ContactSupportOutlinedIcon />}
                    onClick={(e) => changeRoutePath(e, '/')}/>
                <BottomNavigationAction
                    label="Chat"
                    icon={<ChatIcon />}
                    onClick={(e) => changeRoutePath(e, '/chat')}/>
            </BottomNavigation>
        </div>
    );
};

export default Chat;