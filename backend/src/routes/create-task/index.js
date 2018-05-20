import knex from '../../db';
import { getMissingMsg } from '../../utils';

function getBodyErr(body) {
  const requiredBodyFields = ['userId', 'taskData'];
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

  const { userId, taskData } = body;
  const {
    content, dueDate, impact, timeNeeded
  } = taskData;
  let taskId;
  try {
    taskId = await knex('tasks').insert({
      user_id: userId,
      content,
      due_date: dueDate,
      impact,
      time_needed: timeNeeded
    }).returning('id');
  } catch (ex) {
    console.error(ex); // eslint-disable-line no-console
  }
  return res.send(taskId);
};

