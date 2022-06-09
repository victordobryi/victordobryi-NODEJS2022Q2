import { createReadStream } from 'fs';
import { stdout } from 'process';

export const cat = async (path) => {
  const readableStream = await createReadStream(path);
  readableStream.pipe(stdout);
};
