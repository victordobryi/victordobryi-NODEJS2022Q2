import { createWriteStream } from 'fs';
import { IUser } from '../controllers/userController';

export const writeDataToFile = async (fileName: string, content: IUser[]) => {
  const writeStream = await createWriteStream(fileName);
  writeStream.once('open', () => {
    writeStream.write(JSON.stringify(content), 'utf-8');
  });
};
