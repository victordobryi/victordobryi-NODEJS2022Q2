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
import { getOSData } from '../src/OS-data/getOSData.js';
import { hash } from '../src/hash/hash.js';
import { compress } from '../src/zip/compress.js';
import { decompress } from '../src/zip/decompress.js';

export const readline = ReadLine.createInterface({
  input: stdin,
  output: stdout,
});

export const startReadlineProcess = async () => {
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
        case 'os':
          getOSData(getOtherArgs(command));
          break;
        case 'hash':
          hash(getOtherArgs(command));
          break;
        case 'compress':
          compress(getOtherArgs(command));
          break;
        case 'decompress':
          decompress(getOtherArgs(command));
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
};
