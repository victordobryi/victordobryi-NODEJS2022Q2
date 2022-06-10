import { copyFile, lstat, mkdir, readdir } from 'fs/promises';
import { getPath } from '../../utils/getPath.js';
import path from 'path';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const cp = async (props) => {
  const [pathToFile, pathToNewDirrectory] = props.split(' ');
  const file = getPath(pathToFile);
  const currentDirrectory = path.join(getPath(pathToNewDirrectory), path.basename(file));
  const isDirr = (await lstat(file)).isDirectory();

  try {
    if (isDirr) {
      await mkdir(currentDirrectory);
      const dirFiles = await readdir(file);
      await Promise.all(dirFiles.map((i) => copyFile(`${file}/${i}`, `${currentDirrectory}/${i}`)));
    } else {
      await copyFile(file, currentDirrectory);
    }
    console.log('Success!');
    console.log(getWorkDirr(process.cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
