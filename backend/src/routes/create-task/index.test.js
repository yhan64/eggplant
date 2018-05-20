import createTask from '.';
import routeNames from '../../constants/route-names';

jest.mock('../../db', () => (tableName) => {
  if (tableName !== 'tasks') {
    return 'error';
  }
  return {
    insert: () => ({
      returning: cols => (cols)
    }),
  };
});

describe(routeNames.CREATE_TASK, () => {
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

  describe('should validate body', () => {
    it('should validate userId', async () => {
      const req = {
        body: { taskData: {} }
      };
      await createTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Missing userId');
    });
    it('should validate taskData', async () => {
      const req = {
        body: {
          userId: '123'
        }
      };

      await createTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Missing taskData');
    });
    it('should validate dueDate if it exists', async () => {
      const req = {
        body: {
          userId: '123',
          taskData: {
            dueDate: '13/10/2018' // dueData should be mm/dd/yyyy format
          }
        }
      };
      await createTask(req, res);
      expect(mockStatus).toBeCalledWith(400);
      expect(mockSend).toBeCalledWith('Invalid dueDate');
    });
  });

  it('should return created task\'s id', async () => {
    const userId = '123';
    const content = 'this is a task';
    const dueDate = '12/2/2018';
    const impact = 8;
    const timeNeeded = 3;

    const req = {
      body: {
        userId,
        taskData: {
          content,
          dueDate,
          impact,
          timeNeeded
        }
      }
    };

    await createTask(req, res);
    expect(mockSend).toBeCalledWith('id');
  });
});
