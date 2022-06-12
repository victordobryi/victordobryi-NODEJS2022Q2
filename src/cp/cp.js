import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
  const child = fork(__dirname + '/files/script.js', args);
};

spawnChildProcess(['1', '2', '3']);
