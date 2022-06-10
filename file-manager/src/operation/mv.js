import { rm } from './rm.js';
import { cp } from './cp.js';
import { getWorkDirr } from '../data/getWorkDirr.js';

export const mv = async (props) => {
  const [pathToFile, pathToNewDirrectory] = props.split(' ');
  try {
    await cp(props);
    await rm(pathToFile);
  } catch (error) {
    console.log('Operation failed');
  } finally {
    console.log(getWorkDirr(process.cwd()));
  }
};
