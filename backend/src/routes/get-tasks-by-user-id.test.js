jest.mock('knex', () => (tableName) => {
  if (tableName === 'tasks') {
    return {
      where: obj => (
        [{ id: 'taskId1', userId: obj.userId }, { id: 'taksId2', userId: obj.userId }]
      ),
    };
  }
  return 'error';
});
import getTasksByUserId from './get-tasks-by-user-id';

describe('/get-tasks-by-user-id', () => {
  it('should return all tasks owned by given user', () => {
    const mockSend = jest.fn();
    const req = {
      body: { userId: '123' }
    };
    const res = {
      send: mockSend
    };

    getTasksByUserId(req, res);

    expect(mockSend).toBeCalledWith([{ id: 'taskId1', userId: '123' }, { id: 'taksId2', userId: '123' }]);
  });
});
