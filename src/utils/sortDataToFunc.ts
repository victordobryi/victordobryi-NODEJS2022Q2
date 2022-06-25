import { drawFigure } from './drawFigure';
import { mouseMove } from './mouseMove';

export const sortDataToFunc = (data: string) => {
  const commandCategory = data.split('_')[0];
  const commandData = data.split(' ');
  const [command, firstParam, secondParam] = commandData;
  switch (commandCategory) {
    case 'mouse':
      mouseMove(command, +firstParam);
      break;
    case 'draw':
      drawFigure(command, +firstParam, +secondParam);
      break;
    default:
      break;
  }
};
