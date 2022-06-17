import { IUser } from '../controllers/userController';

export const isValidateBody = (parsedBody: IUser) => {
  const { age, hobbies, username } = parsedBody;
  return !!(
    Object.keys(parsedBody).length === 3 &&
    username &&
    hobbies &&
    age &&
    typeof age === 'number' &&
    typeof username === 'string' &&
    Array.isArray(hobbies) &&
    hobbies.every((item) => typeof item === 'string')
  );
};
