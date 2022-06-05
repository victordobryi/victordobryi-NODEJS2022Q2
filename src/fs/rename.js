import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
  if (fs.existsSync(__dirname + '/files/wrongFilename.txt')) {
    if (fs.existsSync(__dirname + '/files/properFilename.md')) {
      throw new Error('File "properFilename.md" already exists');
    } else {
      fs.rename(
        __dirname + '/files/wrongFilename.txt',
        __dirname + '/files/properFilename.md',
        (err) => {
          if (err) {
            throw new Error(err.message, 'err');
          }
        }
      );
    }
  } else {
    throw new Error('File "wrongFilename.txt" is missing ');
  }
};

rename();
