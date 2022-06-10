import path from 'path';
import { getWorkDirr } from '../data/getWorkDirr.js';
import { createWriteStream } from 'fs';

export const add = async (fileName) => {
  const src = path.join(process.cwd(), fileName);
  try {
    const ws = await createWriteStream(src);
    ws.write('');
    ws.end();
    ws.on('finish', () => {
      console.log(getWorkDirr(process.cwd()));
    });
    ws.on('error', () => {
      console.log('Operation failed');
      console.log(getWorkDirr(process.cwd()));
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
