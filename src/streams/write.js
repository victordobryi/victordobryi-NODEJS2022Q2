import fs from 'fs';
import { stdin } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  const output = fs.createWriteStream(__dirname + '/files/fileToWrite.txt');
  stdin.pipe(output);
};

write();
