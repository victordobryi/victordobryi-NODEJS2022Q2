import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  if (fs.existsSync(`${__dirname + '/files/fileToRead.txt'}`)) {
    fs.readFile(`${__dirname + '/files/fileToRead.txt'}`, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        throw new Error(err.message);
      } else {
        console.log(data);
      }
    });
  } else {
    throw new Error('File fileToRead.txt is missing');
  }
};

read();
