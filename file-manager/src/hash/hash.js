import crypto from 'crypto';
import { getPath } from '../../utils/getPath.js';
import { createReadStream } from 'fs';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const hash = async (src) => {
  const fileSrc = getPath(src);

  try {
    const readableStream = await createReadStream(fileSrc);
    let data = '';
    readableStream.on('data', (chunk) => (data += chunk));
    readableStream.on('end', () => {
      const hash = crypto.createHash('sha256').update(data).digest('hex');
      console.log(hash);
      console.log(getWorkDirr(process.cwd()));
    });
    readableStream.on('error', (error) => console.log('Operation failed'));
  } catch (error) {
    console.log('Operation failed');
  }
};
