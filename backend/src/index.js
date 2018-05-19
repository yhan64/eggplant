
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.NODE_ENV === 'production' ? 80 : 4321;
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('pageok'));

http.createServer(app).listen(port, () => {
  console.log(`Started listening on port ${port}!`); // eslint-disable-line no-console
});
