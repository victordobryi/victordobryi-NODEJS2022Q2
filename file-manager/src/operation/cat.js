import { createReadStream } from 'fs';
import { stdout } from 'process';

export const cat = async (path) => {
  try {
    const readableStream = await createReadStream(path);
    readableStream.pipe(stdout);
  } catch (error) {
    console.log('Operation failed');
  }
};
