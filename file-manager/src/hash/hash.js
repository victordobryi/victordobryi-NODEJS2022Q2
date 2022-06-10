import crypto from 'crypto';
import { getPath } from '../../utils/getPath.js';
import { createReadStream } from 'fs';

export const hash = async (src) => {
  const fileSrc = getPath(src);

  try {
    const readableStream = await createReadStream(fileSrc);
    let data = '';
    readableStream.on('data', (chunk) => (data += chunk));
    readableStream.on('end', () => {
      const hash = crypto.createHash('sha256').update(data).digest('hex');
      console.log(hash);
    });
    readableStream.on('error', (error) => console.log('Operation failed'));
  } catch (error) {
    console.log('Operation failed');
  }
};
