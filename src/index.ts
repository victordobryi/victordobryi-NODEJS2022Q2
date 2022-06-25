import { httpServer } from './http_server/index';
import * as dotenv from 'dotenv';
import { WebSocketServer } from 'ws';
import { sortDataToFunc } from './utils/sortDataToFunc';
dotenv.config();
import * as robot from 'robotjs';
import { printScreen } from './utils/printScreen';

const HTTP_PORT = process.env.PORT || 8000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A new client connected');
  ws.send('Welcome new client');

  ws.on('message', async (message) => {
    if (message.toString('utf-8').split(' ')[0] === 'mouse_position') {
      const position = robot.getMousePos();
      const { x, y } = position;
      try {
        console.log(`Received: mouse_position`);
        ws.send(`mouse_position ${x},${y}\0`);
      } catch (error) {
        console.log(`Result: mouse_position not completed Error`);
      } finally {
        console.log(`Result: mouse_position completed Successfully`);
      }
    } else if (message.toString('utf-8').split(' ')[0] === 'prnt_scrn') {
      try {
        console.log(`Received: prnt_scrn`);
        ws.send(`${message.toString('utf-8')} ${await printScreen()}\0`);
      } catch (error) {
        console.log(`Result: prnt_scrn not completed Error`);
      } finally {
        console.log(`Result: prnt_scrn completed Successfully`);
      }
    } else {
      sortDataToFunc(message.toString('utf-8'));
      ws.send(`${message.toString('utf-8')}\0`);
    }
  });

  ws.on('error', (err) => {
    console.log(err.message);
  });

  ws.on('close', () => {
    console.log('Закрытие соединения!');
  });
});

process.on('SIGINT', () => {
  process.stdout.write('Closing websocket...\n');
  wss.close();
  process.exit(0);
});
