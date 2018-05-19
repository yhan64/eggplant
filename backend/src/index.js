
import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('pageok'))

https.createServer(options, app).listen(80, () => {
  console.log('Started listening on port 80!')
});
