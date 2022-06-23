import { WebSocket, WebSocketServer } from 'ws';
import { httpServer } from '../http_server';

const wss = new WebSocketServer({ server: httpServer, path: 'ws://localhost:8080/' });

wss.on('connection', (ws) => {
  console.log('A new client connected');
  ws.send('Welcome new client');

  ws.on('message', (message) => {
    console.log(message);
    ws.send('Got your message its:' + message);
  });

  ws.on('error', (err) => {
    console.log(err.message);
  });
});

wss.on('close', () => {
  console.log('Закрытие соединения!');
});
