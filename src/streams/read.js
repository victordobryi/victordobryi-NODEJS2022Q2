import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const read = async () => {
  const src = getPathFromFiles(import.meta.url, '/files', 'fileToRead.txt');
  const readableStream = await createReadStream(src, 'utf-8');
  let data = '';
  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => stdout.write(data));
  readableStream.on('error', (error) => console.log('Error', error.message));
};

read();
