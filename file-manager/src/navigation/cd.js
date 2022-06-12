import path from 'path';
import { chdir } from 'process';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const cd = async (newDir) => {
  try {
    if (path.isAbsolute(newDir)) {
      chdir(path.resolve(newDir));
    } else {
      chdir(path.join(process.cwd(), newDir));
    }
  } catch (error) {
    console.log('Operation failed');
  } finally {
    console.log(getWorkDirr(process.cwd()));
  }
};
