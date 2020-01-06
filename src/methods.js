import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

function handleInput(event) {
    const { value, name } = event.target;

    this.setState({
    [name]: value,
    });
}

// Quality: d3a62346-4501-4b50-aefd-bd6add171e96
// General: 052b228e-a4aa-474d-884b-ab4270f81843
function connectToRoom(id = '052b228e-a4aa-474d-884b-ab4270f81843') {
    const { currentUser } = this.state;

    this.setState({
      messages: [],
    });

    return currentUser
        .subscribeToRoom({
        roomId: `${id}`,
        messageLimit: 100,
        hooks: {
            onMessage: message => {
            this.setState({
                messages: [...this.state.messages, message],
            });
            },
            onPresenceChanged: () => {
            const { currentRoom } = this.state;
            this.setState({
                roomUsers: currentRoom.users.sort(a => {
                if (a.presence.state === 'online') return -1;

                return 1;
                }),
            });
            },
        },
        })
        .then(currentRoom => {
        const roomName =
            currentRoom.customData && currentRoom.customData.isDirectMessage
            ? currentRoom.customData.userIds.filter(
                id => id !== currentUser.id
                )[0]
            : currentRoom.name;

        this.setState({
            currentRoom,
            roomUsers: currentRoom.users,
            rooms: currentUser.rooms,
            roomName,
        });
    })
    .catch(console.error);
}

function connectToChatkit(event) {
    event.preventDefault();

    const { userId } = this.state;

    if (userId === null || userId.trim() === '') {
    alert('Invalid userId');
    return;
    }

    axios
    .post('http://localhost:5200/users', { userId })
    .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
        url: 'http://localhost:5200/authenticate',
        });

        const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:b69f844f-8881-4dad-b52c-a533c91e8f6c',
        userId,
        tokenProvider,
        });

        return chatManager
        .connect({
            onAddedToRoom: room => {
            const { rooms } = this.state;
            this.setState({
                rooms: [...rooms, room],
            });
            },
        })
        .then(currentUser => {
            this.setState(
            {
                currentUser,
                showLogin: false,
                rooms: currentUser.rooms,
            },
                () => connectToRoom.call(this)
            );
        });
    })
    .catch(console.error);
}

function sendMessage(event) {
event.preventDefault();
const { newMessage, currentUser, currentRoom } = this.state;

if (newMessage.trim() === '') return;

currentUser.sendMessage({
    text: newMessage,
    roomId: `${currentRoom.id}`,
});

this.setState({
        newMessage: '',
    });
}

export { handleInput, connectToRoom, connectToChatkit, sendMessage }