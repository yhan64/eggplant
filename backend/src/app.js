import express from 'express';
import bodyParser from 'body-parser';
import getTasksByUserId from './routes/get-tasks-by-user-id';
import routeNames from './constants/route-names';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('api server ok'));
app.post(routeNames.GET_TASKS_BY_USER_ID, getTasksByUserId);

export default app;
