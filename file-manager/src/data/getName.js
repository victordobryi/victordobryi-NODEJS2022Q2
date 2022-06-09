export const getName = () => {
  const argvData = process.argv.slice(2);
  const userName = argvData
    .reduce((acc, arg) => {
      if (arg.startsWith('--username')) {
        const name = arg.split('=')[1];
        const upperCaseName = name[0].toUpperCase() + name.slice(1);
        acc.push(upperCaseName);
      }
      return acc;
    }, [])
    .join(' ');
  return userName;
};
