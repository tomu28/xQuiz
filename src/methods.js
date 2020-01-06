import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

function handleInput(event) {
    const { value, name } = event.target;

    this.setState({
    [name]: value,
    });
}
// 052b228e-a4aa-474d-884b-ab4270f81843
function connectToRoom(id = '052b228e-a4aa-474d-884b-ab4270f81843') {
    const { currentUser } = this.state;

    this.setState({
        messages: [],
    });

    return currentUser
        .subscribeToRoom({
        roomId: `${id}`,
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

export { handleInput, connectToRoom, connectToChatkit }