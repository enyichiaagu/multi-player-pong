import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { default as apiServer } from './api.js';
import * as socket from './sockets.js';

const httpServer = createServer(apiServer);
const socketServer = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = 3000;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));

socket.listen(socketServer);
