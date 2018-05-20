import request from 'supertest';
import app from '../../src/app';
import routeNames from '../../src/constants/route-names';
import { userId1 } from '../../seeds/init';

describe(routeNames.CREATE_TASK, () => {
  it('should return 400 if task data is missing', async () => {
    await request(app)
      .post(routeNames.CREATE_TASK)
      .send({ userId: userId1 })
      .expect(400);
  });
  it('should return 200 if empty task data is given', async () => {
    await request(app)
      .post(routeNames.CREATE_TASK)
      .send({ userId: userId1, taskData: {} })
      .expect(200);
  });
  it('should return 200 if all fields in taskData is valid', async () => {
    await request(app)
      .post(routeNames.CREATE_TASK)
      .send({
        userId: userId1,
        taskData: {
          content: 'this is a task', dueDate: '05/3/2018', impact: 2, timeNeeded: 4
        }
      })
      .expect(200);
  });
});
