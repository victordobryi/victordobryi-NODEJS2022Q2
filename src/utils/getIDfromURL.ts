import * as http from 'http';

export const getIDfromURL = (req: http.IncomingMessage) =>
  req.url.split('/').slice(-1).join('');
