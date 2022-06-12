import os from 'os';
import { chdir } from 'process';
import { getGreetingPhrase } from './src/data/getGreetingPhrase.js';
import { getName } from './src/data/getName.js';
import { getWorkDirr } from './src/data/getWorkDirr.js';
import { startReadlineProcess } from './utils/readline.js';

const fileManager = () => {
  const userName = getName();
  const greetingPhrase = getGreetingPhrase(userName);
  const homeDir = os.homedir();
  const pathMessage = getWorkDirr(homeDir);
  const currentDir = chdir(homeDir);

  startReadlineProcess();
  console.log(greetingPhrase + '\n' + pathMessage);
};

fileManager();
