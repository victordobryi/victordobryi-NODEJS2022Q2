import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { getPath } from '../../utils/getPath.js';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const compress = async (props) => {
  const [file, dirrectory] = props.split(' ');
  const currentFile = getPath(file);
  const currentDirr = getPath(dirrectory);

  try {
    const input = await createReadStream(currentFile);
    const output = await createWriteStream(currentDirr);
    const gzip = zlib.createBrotliCompress();
    pipeline(input, gzip, output, (err) => {
      if (err) {
        console.log('Operation failed');
      }
    });
    console.log('Success!');
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
