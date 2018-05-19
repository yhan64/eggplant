import knex from '../db';

export default async (req, res) => {
  const { body } = req;

  const tasks = await knex('tasks').where({
    userId: body.userId
  });

  res.send(tasks);
};
