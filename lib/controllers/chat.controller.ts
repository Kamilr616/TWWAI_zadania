import { Router } from 'express';
import { Server, Socket } from 'socket.io';

class ChatController {
    private io: Server;

    constructor(io: Server) {
        this.io = io;
    }

    public initializeRoutes(router: Router): void {
        this.io.on('connection', this.handleSocketConnection);
    }

    private handleSocketConnection = (socket: Socket) => {
        socket.on('joinRoom', (data: { username: string; room: string }) => {
            const { username, room } = data;

            socket.join(room);
            console.log(`${username} joined room: ${room}`);
        });
        socket.on('leaveRoom', (room: string) => {
            socket.leave(room);
            console.log('User left room: ${room}');
        });
        socket.on('sendMessage', (data: { username: string; room: string; message: string }) => {
            this.io.to(data.room).emit('receiveMessage', {
                username: data.username,
                message: data.message,
            });
        });
        socket.on('disconnect', () => {
            console.log('User disconnected from chat');
        });

    };
}

export default ChatController;