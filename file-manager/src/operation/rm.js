import { rm as remove } from 'fs/promises';
import { getPath } from '../../utils/getPath.js';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const rm = async (src) => {
  const file = getPath(src);

  try {
    await remove(file, { recursive: true });
    console.log('Success!');
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
