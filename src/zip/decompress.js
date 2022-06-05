import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
  const input = fs.createReadStream(__dirname + '/files/archive.gz');
  const output = fs.createWriteStream(__dirname + '/files/fileToCompress.txt');
  const gzip = zlib.createUnzip();
  pipeline(input, gzip, output, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};

decompress();
