import { IUser, ServerData } from '../controllers/userController';

export const getPostData = ({ req, res }: ServerData): Promise<IUser> => {
  return new Promise((resolve, rej) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Server shutting down' }));
        }
      });
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server shutting down' }));
    }
  });
};
