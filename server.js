import { createServer } from 'node:http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer);

const PORT = 3000;
httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));

io.on('connection', (socket) => {
  console.log('a user connected');
});
