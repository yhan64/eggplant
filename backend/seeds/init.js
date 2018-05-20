export const userId1 = '605eb99e-1ee3-4bd9-b54c-1eb2295bb7df';

const userId2 = '7c47b145-729b-4a62-818b-a3ebc2fbfb7c';

export async function seed(knex) {
  await knex('users').insert({ id: userId1, username: 'Yushan', password: '123' });
  await knex('users').insert({ id: userId2, username: 'Fan', password: '123' });
  await knex('tasks').insert({ user_id: userId1, content: 'Important task', impact: 8 });
  await knex('tasks').insert({ user_id: userId1, content: 'Important task', impact: 6 });
}
