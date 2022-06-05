import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  if (fs.existsSync(`${__dirname + '/files/fresh.txt'}`)) {
    throw new Error('File already exists');
  } else {
    fs.writeFile(`${__dirname + '/files/fresh.txt'}`, 'I am fresh and young', (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  }
};

create();
