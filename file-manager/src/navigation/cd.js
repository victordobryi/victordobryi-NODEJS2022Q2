import path from 'path';
import { chdir } from 'process';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const cd = (newDir) => {
  if (path.isAbsolute(newDir)) {
    chdir(path.resolve(newDir));
    console.log(getWorkDirr(newDir));
  } else {
    chdir(path.join(process.cwd(), newDir));
    console.log(getWorkDirr(process.cwd()));
  }
};
