import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
  if (fs.existsSync(`${__dirname + '/files_copy/'}`)) {
    throw new Error('File already exists');
  } else {
    fs.mkdir(`${__dirname + '/files_copy/'}`, (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  }
  fs.readdir(`${__dirname + '/files'}`, (err, files) => {
    if (err) {
      throw new Error(err.message);
    } else {
      files.map((file) => {
        fs.copyFile(__dirname + `/files/${file}`, __dirname + `/files_copy/${file}`, (err) => {
          if (err) {
            throw new Error(err.message);
          }
        });
      });
    }
  });
};

copy();
