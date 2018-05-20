import request from 'supertest';
import app from '../../src/app';
import routeNames from '../../src/constants/route-names';
import { taskId1 } from '../../seeds/init';

describe(routeNames.UPDATE_TASK, () => {
  it('should return 400 if task id is missing', async () => {
    await request(app)
      .post(routeNames.UPDATE_TASK)
      .send({ taskData: {} })
      .expect(400);
  });
  it('should return 200 if taskId is given', async () => {
    await request(app)
      .post(routeNames.UPDATE_TASK)
      .send({ taskData: { taskId: taskId1 } });
  });
});
