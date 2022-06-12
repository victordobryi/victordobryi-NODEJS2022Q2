import { rename as fsRename } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const rename = async () => {
  const wrongFile = getPathFromFiles(import.meta.url, '/files', 'wrongFilename.txt');
  const correctFile = getPathFromFiles(import.meta.url, '/files', 'properFilename.md');

  try {
    await fsRename(wrongFile, correctFile);
  } catch (error) {
    throw error;
  }
};

rename();
