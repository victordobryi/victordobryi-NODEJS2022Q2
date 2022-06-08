import { writeFile } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const create = async () => {
  const src = getPathFromFiles(import.meta.url, './files', 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await writeFile(src, content, { flag: 'wx' });
  } catch (error) {
    throw error;
  }
};

create();
