import ReadLine from 'readline';
import { stdin, stdout } from 'process';
import { up } from '../src/navigation/up.js';
import { cd } from '../src/navigation/cd.js';
import { getByePhrase } from '../src/data/getByePhrase.js';
import { getName } from '../src/data/getName.js';
import { ls } from '../src/navigation/ls.js';
import { cat } from '../src/operation/cat.js';
import { getOtherArgs } from './getOtherArgs.js';
import { add } from '../src/operation/add.js';
import { rn } from '../src/operation/rn.js';
import { cp } from '../src/operation/cp.js';
import { mv } from '../src/operation/mv.js';
import { rm } from '../src/operation/rm.js';

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
            cd(getOtherArgs(command));
            break;
          case 'ls':
            ls();
            break;
          case 'cat':
            cat(getOtherArgs(command));
            break;
          case 'add':
            add(getOtherArgs(command));
            break;
          case 'rn':
            rn(getOtherArgs(command));
            break;
          case 'cp':
            cp(getOtherArgs(command));
            break;
          case 'mv':
            mv(getOtherArgs(command));
            break;
          case 'rm':
            rm(getOtherArgs(command));
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
    readline.on('pause', () => {
      console.log('Readline paused.');
    });
  }
};
