import { drawCircle } from './drawCircle';
import { drawQuadrilateral } from './drawQuadrilateral';

export const drawFigure = (command: string, firstParam: number, secondParam: number) => {
  const height = firstParam;
  const width = secondParam;
  switch (command) {
    case 'draw_square':
      drawQuadrilateral(height);
      break;
    case 'draw_circle':
      drawCircle(firstParam);
      break;
    case 'draw_rectangle':
      drawQuadrilateral(height, width);
      break;
    default:
      break;
  }
};
