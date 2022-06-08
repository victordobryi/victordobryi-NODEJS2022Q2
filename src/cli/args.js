export const parseArgs = () => {
  const userInputArgs = process.argv.slice(2);
  const cliArguments = userInputArgs.reduce((acc, arg, index, arr) => {
    const valueCandidate = arr[index + 1];
    if (valueCandidate && arg.startsWith('--')) {
      const transformedArgs = arg.slice(2);
      const cliArgumentsTransformed = `${transformedArgs} is ${valueCandidate}`;
      acc.push(cliArgumentsTransformed);
    }
    return acc;
  }, []);
  console.log(cliArguments.join(', '));
};

parseArgs();
