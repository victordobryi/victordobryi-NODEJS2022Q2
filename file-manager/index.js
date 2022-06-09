import { getGreetingPhrase } from './utils/getGreetingPhrase.js';
import { getName } from './utils/getName.js';
import ReadLine from 'readline';
import { stdin, stdout } from 'process';

const readline = ReadLine.createInterface({
  input: stdin,
  output: stdout,
});

const fileManager = () => {
  const userName = getName();
  const greetingPhrase = getGreetingPhrase(userName);
  readline.on('line', (line) => {
    if (line === 'get') {
      console.log('Ты нажал гет');
    } else if (line === 'gat') {
      console.log('Ты нажал гfт');
    }
  });
  console.log(greetingPhrase);
};

fileManager();
