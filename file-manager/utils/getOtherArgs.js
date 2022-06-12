export const getOtherArgs = (arr) => {
  arr.splice(0, 1);
  return arr.join(' ');
};
