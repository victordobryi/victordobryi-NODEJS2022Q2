export const parseArgs = () => {
  process.argv.map((item, i, arr) => {
    item.match(/--[a-zA-Z]/) && arr[i + 1] && !arr[i + 1].match(/--[a-zA-Z]/)
      ? console.log(`${item.replace('--', '')} is ${arr[i + 1]}`)
      : null;
  });
};

parseArgs();
