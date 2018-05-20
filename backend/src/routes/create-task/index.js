import knex from '../../db';

export default async (req, res) => {
  const { body } = req;
  const { userId, taskData } = body;
  if (!taskData) {
    return res.status(400).send('Mising task data');
  }
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
