import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const getOSData = async (prop) => {
  try {
    switch (prop) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        cpus().map((cpu) => {
          console.log({ core: cpu.model, speed: cpu.speed });
        });
        break;
      case '--homedir':
        console.log(homedir());
        break;
      case '--username':
        console.log(userInfo().username);
        break;
      case '--architecture':
        console.log(arch());
        break;
      default:
        console.log('Invalid command');
        break;
    }
  } catch (error) {
    console.error('Operation failed');
  }
};
