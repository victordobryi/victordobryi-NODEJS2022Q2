import path from 'path';
import { rename } from 'fs/promises';
import { getWorkDirr } from '../data/getWorkDirr.js';
import { getPath } from '../../utils/getPath.js';

export const rn = async (props) => {
  const [src, newFileName] = props.split(' ');
  const file = getPath(src);
  const changedFileName = path.basename(file);
  const currentSrc = src.replace(changedFileName, '');
  const newFile = path.resolve(path.join(currentSrc, newFileName));

  try {
    await rename(file, newFile);
    console.log('Success!');
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
