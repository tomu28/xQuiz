import Chatkit from '@pusher/chatkit-client';
import axios from 'axios';

function handleInput(event) {
    const { value, name } = event.target;

    this.setState({
    [name]: value,
    });
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
            }
            );
        });
    })
    .catch(console.error);
}

export { handleInput, connectToChatkit }