import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
  const corsCount = os.cpus().length;
  const resultsArr = [];

  for (let i = 0; i < corsCount; i++) {
    const currentNum = 10 + i;
    const worker = new Worker(__dirname + '/worker.js', {
      workerData: currentNum,
    });
    resultsArr.push(
      new Promise((res, rej) => {
        worker.on('message', (result) => {
          res(`${currentNum}th Fibonacci No: ${result}`);
        });
      })
    );
  }
  await Promise.all(resultsArr).then((res) => console.log(res));
};

performCalculations();
