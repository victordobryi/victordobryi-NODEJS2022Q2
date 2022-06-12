import { readFile } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const read = async () => {
  const src = getPathFromFiles(import.meta.url, '/files', 'fileToRead.txt');

  try {
    const file = await readFile(src, 'utf-8');
    console.log(file);
  } catch (error) {
    throw error;
  }
};

read();
