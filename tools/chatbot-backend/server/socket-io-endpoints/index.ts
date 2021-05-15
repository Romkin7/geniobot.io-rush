import { io } from 'socket.io';

io.on('connection', (socket) => {
	socket.emit('request' /* … */); // emit an event to the socket
	io.emit('broadcast' /* … */); // emit an event to all connected sockets
	socket.on('reply', () => {
		/* … */
	}); // listen to the event
});