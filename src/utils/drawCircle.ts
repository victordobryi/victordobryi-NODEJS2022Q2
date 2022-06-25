import * as robot from 'robotjs';

export const drawCircle = (radius: number) => {
  const mousePos = robot.getMousePos();
  let { x, y } = mousePos;
  robot.mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.01 * Math.PI) {
    const xCoord = x - radius + radius * Math.cos(i);
    const yCoord = y + radius * Math.sin(i);
    robot.dragMouse(xCoord, yCoord);
  }
  robot.mouseToggle('up');
};
