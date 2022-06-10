import path from 'path';
import { writeFile } from 'fs/promises';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const add = async (fileName) => {
  const src = path.join(process.cwd(), fileName);
  try {
    await writeFile(src, '', { flag: 'wx' });
    console.log('Success!');
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    throw error;
  }
};
