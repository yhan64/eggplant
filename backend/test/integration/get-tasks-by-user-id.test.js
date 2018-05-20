import request from 'supertest';
import app from '../../src/app';
import routeNames from '../../src/constants/route-names';
import { userId1 } from '../../seeds/init';

describe(routeNames.GET_TASKS_BY_USER_ID, () => {
  it('should get all tasks for given user', async () => {
    const res = await request(app)
      .post(routeNames.GET_TASKS_BY_USER_ID)
      .send({ userId: userId1 })
      .expect(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
