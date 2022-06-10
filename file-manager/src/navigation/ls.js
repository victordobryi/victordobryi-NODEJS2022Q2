import { readdir } from 'fs/promises';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const ls = async () => {
  const src = process.cwd();
  try {
    const files = await readdir(src);
    console.log(files);
  } catch (error) {
    console.log('Operation failed');
  } finally {
    console.log(getWorkDirr(process.cwd()));
  }
};
