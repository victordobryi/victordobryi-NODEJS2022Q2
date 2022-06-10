import { readdir } from 'fs/promises';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const ls = async () => {
  const src = process.cwd();
  try {
    const files = await readdir(src);
    console.log(files);
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
