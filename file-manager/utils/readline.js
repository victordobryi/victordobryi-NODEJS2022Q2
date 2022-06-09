import ReadLine from 'readline';
import { stdin, stdout } from 'process';
import { up } from '../src/navigation/up.js';
import { cd } from '../src/navigation/cd.js';
import { getByePhrase } from '../src/data/getByePhrase.js';
import { getName } from '../src/data/getName.js';

export const readline = ReadLine.createInterface({
  input: stdin,
  output: stdout,
});

export const startReadlineProcess = async () => {
  try {
    readline
      .on('line', (line) => {
        const command = line.split(' ');
        switch (command[0]) {
          case 'up':
            up();
            break;
          case 'cd':
            const currentPath = command[1] || '';
            cd(currentPath);
            break;
          case 'exit':
          case '.exit':
            process.stdout.write(getByePhrase(getName()));
            process.exit();
          default: {
            console.log('Invalid input');
          }
        }
      })
      .on('close', () => {
        process.stdout.write(getByePhrase(getName()));
      });
  } catch (error) {
    console.error('Operation failed');
  }
};
