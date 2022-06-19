import * as http from 'http';
import {
  getUser,
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from './controllers/userController';
import * as dotenv from 'dotenv';
import { isValidateURL } from './utils/isValidateURL';
import { getIDfromURL } from './utils/getIDfromURL';
dotenv.config();

import * as notReallyCluster from 'cluster';
const cluster = notReallyCluster as unknown as notReallyCluster.Cluster;
import { cpus } from 'os';
const numCPUs = cpus().length;

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === Methods.GET) {
    getUsers({ req, res });
  } else if (isValidateURL(req) && req.method === Methods.GET) {
    const id = getIDfromURL(req);
    getUser({ req, res, id });
  } else if (req.url === '/api/users' && req.method === Methods.POST) {
    createUser({ req, res });
  } else if (isValidateURL(req) && req.method === Methods.PUT) {
    const id = getIDfromURL(req);
    updateUser({ req, res, id });
  } else if (isValidateURL(req) && req.method === Methods.DELETE) {
    const id = getIDfromURL(req);
    deleteUser({ req, res, id });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = process.env.PORT || 8000;

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  console.log(`Worker ${process.pid} started`);
}
