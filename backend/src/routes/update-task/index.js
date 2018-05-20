import knex from '../../db';
import { getMissingMsg } from '../../utils';

function getBodyErr(body) {
  const requiredBodyFields = ['taskData'];
  const bodyMissingMsg = getMissingMsg(body, requiredBodyFields);
  if (bodyMissingMsg) {
    return bodyMissingMsg;
  }

  const { taskData } = body;
  const requiredTaskFields = ['taskId'];
  const taskDataMissingMsg = getMissingMsg(taskData, requiredTaskFields);
  if (taskDataMissingMsg) {
    return taskDataMissingMsg;
  }

  const { dueDate } = taskData;
  if (dueDate && (new Date(dueDate)).toString() === 'Invalid Date') {
    return 'Invalid dueDate';
  }

  return null;
}

export default async (req, res) => {
  const { body } = req;
  const bodyErr = getBodyErr(body);
  if (bodyErr) {
    return res.status(400).send(bodyErr);
  }

  const { taskData } = body;
  const {
    taskId, content, dueDate, impact, timeNeeded, timeConsumed, status
  } = taskData;
  let retTaskId;
  try {
    retTaskId = await knex('tasks')
      .where({
        id: taskId
      })
      .update({
        content,
        due_date: dueDate,
        impact,
        time_needed: timeNeeded,
        time_consumed: timeConsumed,
        status
      }).returning('id');
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
  return res.send(retTaskId);
};
