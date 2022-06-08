import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const write = async () => {
  const src = getPathFromFiles(import.meta.url, '/files', 'fileToWrite.txt');
  const output = createWriteStream(src);
  stdin.pipe(output);
};

write();
