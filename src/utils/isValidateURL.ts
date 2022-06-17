import * as http from 'http';

export const isValidateURL = (req: http.IncomingMessage) =>
  req.url.match(/\/api\/users\/([0-9A-Za-z]+)/);
