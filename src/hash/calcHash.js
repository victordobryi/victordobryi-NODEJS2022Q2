import { readFile } from 'fs/promises';
import crypto from 'crypto';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const calculateHash = async () => {
  const src = getPathFromFiles(import.meta.url, '/files', 'fileToCalculateHashFor.txt');
  try {
    const file = await readFile(src);
    const hash = crypto.createHash('sha256').update(file).digest('hex');
    console.log(hash);
  } catch (error) {
    throw error;
  }
};

calculateHash();
