
import http from 'http';
import app from './app';

const port = process.env.NODE_ENV === 'production' ? 80 : 4321;
http.createServer(app).listen(port, () => {
  console.log(`Started listening on port ${port}!`); // eslint-disable-line no-console
});
