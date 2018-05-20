import knex from '../db';

export default async (req, res) => {
  const { body } = req;

  try {
    const tasks = await knex('tasks').where({
      userId: body.userId
    });
    res.send(tasks);
  } catch (ex) {
    console.error(ex); // eslint-disable-line no-console
  }
};
