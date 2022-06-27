import * as robot from 'robotjs';

export const drawQuadrilateral = (height: number, width: number = height) => {
  const mousePos = robot.getMousePos();
  let { x, y } = mousePos;
  robot.mouseToggle('down');
  x += height;
  robot.moveMouseSmooth(x, y);
  y += width;
  robot.moveMouseSmooth(x - 2, y);
  x -= height + 2;
  robot.moveMouseSmooth(x, y - 2);
  y -= width + 2;
  robot.moveMouseSmooth(x + 2, y);
  robot.mouseToggle('up');
};
