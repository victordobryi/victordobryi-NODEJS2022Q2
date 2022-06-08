import { mkdir, readdir, copyFile } from 'fs/promises';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const copy = async () => {
  const srcFolder = getPathFromFiles(import.meta.url, './files');
  const destinationFolder = getPathFromFiles(import.meta.url, '', './files_copy');

  try {
    await mkdir(destinationFolder);
    const dirFiles = await readdir(srcFolder);
    await Promise.all(
      dirFiles.map((i) => copyFile(`${srcFolder}/${i}`, `${destinationFolder}/${i}`))
    );
  } catch (error) {
    throw error;
  }
};

copy();
