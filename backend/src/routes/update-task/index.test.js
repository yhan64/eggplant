import updateTask from '.';
import routeNames from '../../constants/route-names';
import mockKnex from '../../db';

const mockReturning = jest.fn(() => 'task Id');
const mockUpdate = jest.fn(() => ({
  returning: mockReturning
}));
const mockWhere = jest.fn(() => ({
  update: mockUpdate
}));

jest.mock('../../db', () => jest.fn(() => ({
  where: mockWhere,
})));

describe(routeNames.UPDATE_TASK, () => {
  let mockSend;
  let res;
  let mockStatus;
  beforeEach(() => {
    mockSend = jest.fn();
    mockStatus = jest.fn(() => ({ send: mockSend }));
    res = {
      status: mockStatus,
      send: mockSend
    };
  });
  it('should update the given task', async () => {
    const req = {
      body: {
        userId: 'right user',
        taskData: {
          taskId: 'task Id',
        }
      }
    };
    await updateTask(req, res);
    expect(mockKnex).toBeCalledWith('tasks');
    expect(mockWhere).toBeCalledWith({ id: 'task Id' });
    expect(mockUpdate).toBeCalledWith({
      content: undefined,
      due_date: undefined,
      impact: undefined,
      time_needed: undefined,
      time_consumed: undefined,
      status: undefined
    });
    expect(mockStatus).not.toBeCalled();
    expect(mockSend).toBeCalledWith('task Id');
  });

  describe('should validate body', () => {
    it('should validate taskData', async () => {
      const req = {
        body: {
          userId: 'right user'
        }
      };

      await updateTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Missing taskData');
    });
    it('should validate taskId', async () => {
      const req = {
        body: {
          userId: 'right user',
          taskData: {}
        }
      };
      await updateTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Missing taskId');
    });
    it('should validate dueDate if it exists', async () => {
      const req = {
        body: {
          userId: 'right user',
          taskData: {
            taskId: 'task Id',
            dueDate: '13/10/2018' // dueData should be mm/dd/yyyy format
          }
        }
      };
      await updateTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Invalid dueDate');
    });
  });
});
