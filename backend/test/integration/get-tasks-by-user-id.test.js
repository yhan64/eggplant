import request from 'supertest';
import app from '../../src/app';
import routeNames from '../../src/constants/route-names';

describe(routeNames.GET_TASKS_BY_USER_ID, () => {
  it('should get all tasks for given user', async () => {
    const res = await request(app)
      .post(routeNames.GET_TASKS_BY_USER_ID)
      .send({ userId: '605eb99e-1ee3-4bd9-b54c-1eb2295bb7df' })
      .expect(200);
    expect(res.body).toEqual([]);
  });
});
