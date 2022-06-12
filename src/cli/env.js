export const parseEnv = () => {
  const values = process.env;
  for (let value in values) {
    value.startsWith('RSS_') ? console.log(`${value}=${values[value]}`) : null;
  }
};

parseEnv();
