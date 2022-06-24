import { drawFigure } from './drawFigure';
import { mouseMove } from './mouseMove';

export const sortDataToFunc = (data: string) => {
  const commandCategory = data.split('_')[0];
  const command = data.split(' ')[0];
  const commandValue = data.split(' ')[1];
  switch (commandCategory) {
    case 'mouse':
      mouseMove(command, +commandValue);
      break;
    case 'draw':
      drawFigure(command, commandValue);
      break;
    default:
      break;
  }
};
