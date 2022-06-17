import { createReadStream } from 'fs';
import { IUser } from '../controllers/userController';

export const readData = (fileName: string): Promise<IUser[]> => {
  return new Promise((res, rej) => {
    try {
      const readableStream = createReadStream(fileName, 'utf-8');
      let data = '';
      readableStream.on('data', (chunk) => (data += chunk.toString()));
      readableStream.on('end', () => res(JSON.parse(data)));
      readableStream.on('error', (error) =>
        console.log('Error', error.message)
      );
    } catch (error) {
      console.log(error);
    }
  });
};
