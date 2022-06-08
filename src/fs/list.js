import { readdir } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const list = async () => {
  const src = getPathFromFiles(import.meta.url, '/files');
  try {
    const files = await readdir(src);
    console.log(files);
  } catch (error) {
    throw error;
  }
};

list();
