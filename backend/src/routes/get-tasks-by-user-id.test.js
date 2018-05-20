import getTasksByUserId from './get-tasks-by-user-id';

jest.mock('../db', () => (tableName) => {
  if (tableName === 'tasks') {
    return {
      where: obj => (
        [{ id: 'taskId1', userId: obj.userId }, { id: 'taksId2', userId: obj.userId }]
      ),
    };
  }
  return 'error';
});

describe('/get-tasks-by-user-id', () => {
  it('should return all tasks owned by given user', async () => {
    const callData = [{ id: 'taskId1', userId: '123' }, { id: 'taksId2', userId: '123' }];
    const mockSend = jest.fn();
    const req = {
      body: { userId: '123' }
    };
    const res = {
      send: mockSend
    };

    await getTasksByUserId(req, res);

    expect(res.send).toBeCalledWith(callData);
  });
});
