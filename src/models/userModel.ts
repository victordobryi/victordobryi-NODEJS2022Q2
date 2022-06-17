import { IUser } from '../controllers/userController';
import { v4 as uuidv4 } from 'uuid';
import { writeDataToFile } from '../utils/writeDataToFile';
import { readData } from '../utils/readData';

export const findAll = async () => {
  const users = await readData('./src/data/users.json');
  return new Promise((res, rej) => {
    res(users);
  });
};

export const findById = async (id: string): Promise<IUser> => {
  const users = await readData('./src/data/users.json');
  return new Promise((res, rej) => {
    const user = users.find((user) => user.id === id);
    res(user);
  });
};

export const create = async (user: IUser) => {
  const users = await readData('./src/data/users.json');
  return new Promise((res, rej) => {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile('./src/data/users.json', users);
    res(newUser);
  });
};

export const update = async (id: string, user: IUser) => {
  const users = await readData('./src/data/users.json');
  return new Promise((res, rej) => {
    const index = users.findIndex((p) => p.id === id);
    users[index] = { id, ...user };
    writeDataToFile('./src/data/users.json', users);
    res(users[index]);
  });
};

export const remove = async (id: string): Promise<void> => {
  try {
    const users: IUser[] = await readData('./src/data/users.json');
    const updUsers = users.filter((p) => p.id !== id);
    writeDataToFile('./src/data/users.json', updUsers);
  } catch (error) {
    console.log(error);
  }
};
