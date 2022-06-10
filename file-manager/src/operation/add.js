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
      console.log('Success!');
      console.log(getWorkDirr(process.cwd()));
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
