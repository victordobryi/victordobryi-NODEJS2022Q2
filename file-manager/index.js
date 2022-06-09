import os from 'os';
import { getGreetingPhrase } from './src/data/getGreetingPhrase.js';
import { getName } from './src/data/getName.js';
import { getWorkDirr } from './src/data/getWorkDirr.js';
import { startReadlineProcess } from './utils/readline.js';
import { chdir } from 'process';

const fileManager = () => {
  const userName = getName();
  const greetingPhrase = getGreetingPhrase(userName);
  const homeDir = os.homedir();
  const currentDir = chdir(homeDir);
  const pathMessage = getWorkDirr(homeDir);

  startReadlineProcess().catch((err) => {
    console.error('Operation failed');
  });
  console.log(greetingPhrase + '\n' + pathMessage);
};

fileManager();
