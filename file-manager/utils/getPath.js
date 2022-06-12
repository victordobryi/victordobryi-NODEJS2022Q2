import path from 'path';

export const getPath = (src) => {
  if (path.isAbsolute(src)) {
    return path.resolve(src);
  } else {
    return path.join(process.cwd(), src);
  }
};
