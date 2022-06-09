import os from 'os';
import { getGreetingPhrase } from './src/data/getGreetingPhrase.js';
import { getName } from './src/data/getName.js';
import { getWorkDirr } from './src/data/getWorkDirr.js';
import { startReadlineProcess } from './utils/readline.js';

const fileManager = () => {
  const userName = getName();
  const greetingPhrase = getGreetingPhrase(userName);
  const homeDir = os.homedir();
  const pathMessage = getWorkDirr(homeDir);

  startReadlineProcess().catch((err) => {
    console.error('Operation failed');
  });
  console.log(greetingPhrase + '\n' + pathMessage);
};

fileManager();
