import { stdin, stdout } from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const tranfromText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n');
    },
  });
  stdin.pipe(tranfromText).pipe(stdout);
};

transform();
