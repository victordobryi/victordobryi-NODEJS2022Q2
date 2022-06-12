import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getPathFromFiles = (url, path, filename = '') => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, path, filename);
  return filePath;
};
