import knex from '../../db';
import { getMissingMsg } from '../../utils';

function getBodyErr(body) {
  const requiredBodyFields = ['taskData', 'taskId'];
  const bodyMissingMsg = getMissingMsg(body, requiredBodyFields);
  if (bodyMissingMsg) {
    return bodyMissingMsg;
  }

  const { dueDate } = body.taskData;
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

  const { taskData, taskId } = body;
  const {
    content, dueDate, impact, timeNeeded, timeConsumed, status
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
