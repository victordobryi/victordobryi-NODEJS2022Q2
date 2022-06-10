import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const cat = async (path) => {
  try {
    const readableStream = await createReadStream(path);
    readableStream.pipe(stdout);
    readableStream.on('end', () => {
      console.log('\n' + getWorkDirr(process.cwd()));
    });
    readableStream.on('error', () => {
      console.log('Operation failed');
      console.log(getWorkDirr(process.cwd()));
    });
  } catch (error) {
    console.log('Operation failed');
    console.log(getWorkDirr(process.cwd()));
  }
};
