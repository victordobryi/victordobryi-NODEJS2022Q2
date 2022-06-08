import { unlink } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const remove = async () => {
  const src = getPathFromFiles(import.meta.url, '/files', '/fileToRemove.txt');

  try {
    await unlink(src);
  } catch (error) {
    throw error;
  }
};

remove();
