import knex from '../../db';

export default async (req, res) => {
  const { body } = req;
  let tasks;
  try {
    tasks = await knex('tasks').where({
      user_id: body.userId
    });
  } catch (ex) {
    console.error(ex); // eslint-disable-line no-console
  }
  return res.send(tasks);
};
