import * as robot from 'robotjs';
import * as Jimp from 'jimp';

export const printScreen = async () => {
  const mousePos = robot.getMousePos();
  let { x, y } = mousePos;
  const imageSize = 100;
  const bitmap = robot.screen.capture(x, y, imageSize * 2, imageSize * 2);
  const image = new Jimp(bitmap.width, bitmap.height);

  let pos = 0;
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    image.bitmap.data[idx + 2] = bitmap.image.readUInt8(pos++);
    image.bitmap.data[idx + 1] = bitmap.image.readUInt8(pos++);
    image.bitmap.data[idx + 0] = bitmap.image.readUInt8(pos++);
    image.bitmap.data[idx + 3] = bitmap.image.readUInt8(pos++);
  });

  const base64Image = await image.getBase64Async(Jimp.MIME_PNG);
  const base64 = base64Image.split(',')[1];
  return base64;
};
