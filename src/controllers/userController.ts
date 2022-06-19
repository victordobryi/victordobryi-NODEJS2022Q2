import { findAll, findById, create, update, remove } from '../models/userModel';
import * as http from 'http';
import { getPostData } from '../utils/getPostData';
import { isValidateId } from '../utils/isValidateId';
import { isValidateBody } from '../utils/isValidateBody';

export interface ServerData {
  req?: http.IncomingMessage;
  res?: http.ServerResponse;
}

interface getUser extends ServerData {
  id: string;
}

export interface IUser {
  id?: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}

export const getUsers = async ({ req, res }: ServerData) => {
  try {
    const users = await findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server shutting down' }));
  }
};

export const getUser = async ({ id, req, res }: getUser) => {
  try {
    if (isValidateId(id)) {
      const user = await findById(id);
      if (!user) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not valid id' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server shutting down' }));
  }
};

export const createUser = async ({ req, res }: ServerData) => {
  try {
    const body = await getPostData({ req, res });
    const { username, hobbies, age } = body;
    if (isValidateBody(body)) {
      const user = {
        username,
        hobbies,
        age,
      };
      const newUser = await create(user);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid data' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server shutting down' }));
  }
};

export const updateUser = async ({ id, req, res }: getUser) => {
  try {
    if (isValidateId(id)) {
      const user = await findById(id);
      if (!user) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
      } else {
        const body = await getPostData({ req, res });
        const { username, hobbies, age } = body;
        for (let prop in body) {
          if (prop !== 'username' && prop !== 'hobbies' && prop !== 'age') {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Not valid data' }));
          }
        }
        const userData = {
          username: username || user.username,
          hobbies: hobbies || user.hobbies,
          age: age || user.age,
        };
        if (isValidateBody(userData)) {
          const updUser = await update(id, userData);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(updUser));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Not valid data' }));
        }
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not valid id' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server shutting down' }));
  }
};

export const deleteUser = async ({ id, req, res }: getUser) => {
  try {
    if (isValidateId(id)) {
      const user = await findById(id);
      if (!user) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User not found' }));
      } else {
        await remove(id);
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end();
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Not valid id' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server shutting down' }));
  }
};
