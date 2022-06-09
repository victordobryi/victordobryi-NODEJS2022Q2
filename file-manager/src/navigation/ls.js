import { readdir } from 'fs/promises';

export const ls = async () => {
  const src = process.cwd();
  try {
    const files = await readdir(src);
    console.log(files);
  } catch (error) {
    throw error;
  }
};
