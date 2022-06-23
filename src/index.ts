import * as Jimp from 'jimp';
import { httpServer } from './http_server/index';
import * as robot from 'robotjs';
import * as dotenv from 'dotenv';
import { WebSocket, WebSocketServer } from 'ws';
dotenv.config();

const HTTP_PORT = process.env.PORT || 8000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

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

  ws.on('close', () => {
    console.log('Закрытие соединения!');
  });
});
