import express from 'express';
import bodyParser from 'body-parser';
import getTasksByUserId from './routes/get-tasks-by-user-id';
import routeNames from './constants/route-names';
import createTask from './routes/create-task';
import updateTask from './routes/update-task';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('api server ok'));
app.post(routeNames.GET_TASKS_BY_USER_ID, getTasksByUserId);
app.post(routeNames.CREATE_TASK, createTask);
app.post(routeNames.UPDATE_TASK, updateTask);

export default app;
