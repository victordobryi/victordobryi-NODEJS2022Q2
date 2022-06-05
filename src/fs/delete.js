import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
  if (fs.existsSync(__dirname + '/files/fileToRemove.txt')) {
    fs.unlink(__dirname + '/files/fileToRemove.txt', (err) => {
      if (err) {
        throw new Error(err.message, 'err');
      }
    });
  } else {
    throw new Error('File "fileToRemove.txt" is missing ');
  }
};

remove();
