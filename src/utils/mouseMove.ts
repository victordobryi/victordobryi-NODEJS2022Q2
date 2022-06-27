import * as robot from 'robotjs';

export const mouseMove = (command: string, commandValue: number) => {
  const mousePos = robot.getMousePos();
  const { x, y } = mousePos;
  console.log(`Received: ${command} ${commandValue}`);
  try {
    switch (command) {
      case 'mouse_up':
        robot.moveMouse(x, y - commandValue);
        break;
      case 'mouse_down':
        robot.moveMouse(x, y + commandValue);
        break;
      case 'mouse_right':
        robot.moveMouse(x + commandValue, y);
        break;
      case 'mouse_left':
        robot.moveMouse(x - commandValue, y);
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(`Result ${command} not completed Error`);
  } finally {
    console.log(`Result: ${command} completed Successfully`);
  }
};
