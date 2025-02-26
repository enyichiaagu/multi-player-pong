import { createServer } from 'node:http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = 3000;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));

let readyPlayerCount = 0;

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('ready', () => {
    console.log('Player ready', socket.id);

    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      io.emit('startGame', socket.id);
    }
  });

  socket.on('paddleMove', (paddleData) => {
    socket.broadcast.emit('paddleMove', paddleData);
  });
});
