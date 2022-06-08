import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { getPathFromFiles } from '../utils/getPathFromFiles.js';

export const decompress = async () => {
  const inputSrc = getPathFromFiles(import.meta.url, '/files', 'archive.gz');
  const outputSrc = getPathFromFiles(import.meta.url, '/files', 'fileToCompress.txt');

  try {
    const input = await createReadStream(inputSrc);
    const output = await createWriteStream(outputSrc);
    const gzip = zlib.createUnzip();
    pipeline(input, gzip, output, (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  } catch (error) {
    throw error;
  }
};

decompress();
