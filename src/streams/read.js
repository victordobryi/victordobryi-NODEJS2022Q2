import fs from 'fs';
import { stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const readableStream = fs.createReadStream(__dirname + '/files/fileToRead.txt', 'utf-8');
  let data = '';
  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => stdout.write(data));
  readableStream.on('error', (error) => console.log('Error', error.message));
};

read();
