import createTask from '.';
import routeNames from '../../constants/route-names';

jest.mock('../../db', () => (tableName) => {
  if (tableName === 'tasks') {
    return {
      insert: insertObj => ({
        returning: cols => ([{
          ...insertObj, cols
        }])
      }),
    };
  }
  return 'error';
});

describe(routeNames.CREATE_TASK, () => {
  it('should return error if task data is missing', async () => {
    const mockSend = jest.fn();

    const req = {
      body: {
        userId: '123'
      }
    };
    const res = { status: () => ({ send: mockSend }) };

    await createTask(req, res);
    expect(mockSend).toBeCalledWith('Mising task data');
  });
  it('should create a task given all nessasary data', async () => {
    const mockSend = jest.fn();
    const content = 'this is a task';
    const dueDate = '12/2/2018';
    const impact = 8;
    const timeNeeded = 3;

    const req = {
      body: {
        userId: '123',
        taskData: {
          content,
          dueDate,
          impact,
          timeNeeded
        }
      }
    };
    const res = { send: mockSend };

    await createTask(req, res);
    expect(mockSend).toBeCalledWith([{
      user_id: '123',
      content,
      due_date: dueDate,
      impact,
      time_needed: timeNeeded,
      cols: 'id'
    }]);
  });
});
