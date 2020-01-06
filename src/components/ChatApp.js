import React, { Component } from 'react';
// import 'skeleton-css/css/normalize.css';
// import 'skeleton-css/css/skeleton.css';
import {
    handleInput,
    connectToChatkit,
    connectToRoom,
} from '../methods';
import Dialog from './Dialog';
import RoomList from './RoomList';
import '../Chat.css';

class ChatApp extends Component {
    constructor() {
    super();
    this.state = {
        userId: '',
        showLogin: true,
        isLoading: false,
        currentUser: null,
        currentRoom: null,
        rooms: [],
        roomUsers: [],
        roomName: null,
        messages: [],
        newMessage: '',
    };
    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    }

    render() {
    const {
        userId,
        showLogin,
        rooms,
        currentRoom,
        currentUser,
        messages,
        newMessage,
        roomUsers,
        roomName,
    } = this.state;

    return (
        <div className="Chat">
            <aside className="sidebar left-sidebar">
                {currentUser ? (
                    <div className="user-profile">
                        <span className="username">{currentUser.name}</span>
                        <span className="user-id">{`@${currentUser.id}`}</span>
                    </div>
                ) : null}
                {currentRoom ? (
                <RoomList
                    rooms={rooms}
                    currentRoom={currentRoom}
                    connectToRoom={this.connectToRoom}
                    currentUser={currentUser}
                />
                ) : null}
            </aside>
        <section className="chat-screen">
            <header className="chat-header">
                {currentRoom ? <h3>{roomName}</h3> : null}
            </header>
            <ul className="chat-messages"></ul>
            <footer className="chat-footer">
            <form className="message-form">
                <input
                type="text"
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                />
            </form>
            </footer>
        </section>
        <aside className="sidebar right-sidebar">
              {showLogin ? (
                <Dialog
                  userId={userId}
                  handleInput={this.handleInput}
                  connectToChatkit={this.connectToChatkit}
                />
              ) : null}
            </aside>
        </div>
    );
    }
}

export default ChatApp;