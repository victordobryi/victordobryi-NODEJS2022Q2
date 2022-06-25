import * as Jimp from 'jimp';
import { httpServer } from './http_server/index';
import * as dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import { sortDataToFunc } from './utils/sortDataToFunc';
dotenv.config();
import * as robot from 'robotjs';

const HTTP_PORT = process.env.PORT || 8000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A new client connected');
  ws.send('Welcome new client');

  ws.on('message', (message) => {
    console.log(message.toString('utf-8'));
    if (message.toString('utf-8').split(' ')[0] === 'mouse_position') {
      const position = robot.getMousePos();
      const { x, y } = position;
      ws.send(`mouse_position ${x},${y}`);
    } else {
      sortDataToFunc(message.toString('utf-8'));
      ws.send(message.toString('utf-8'));
    }
  });

  ws.on('error', (err) => {
    console.log(err.message);
  });

  ws.on('close', () => {
    console.log('Закрытие соединения!');
  });
});
