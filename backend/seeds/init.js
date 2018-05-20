export const userId1 = '605eb99e-1ee3-4bd9-b54c-1eb2295bb7df';
const userId2 = '7c47b145-729b-4a62-818b-a3ebc2fbfb7c';

export const taskId1 = '3cb7d406-298c-4908-a82b-7aa54e714094';
const taskId2 = 'e864357a-f513-48d6-b7eb-a5d473da93fd';

export async function seed(knex) {
  await knex('users').insert({ id: userId1, username: 'Yushan', password: '123' });
  await knex('users').insert({ id: userId2, username: 'Fan', password: '123' });
  await knex('tasks').insert({
    id: taskId1, user_id: userId1, content: 'Important task', impact: 8
  });
  await knex('tasks').insert({
    id: taskId2, user_id: userId1, content: 'Important task', impact: 6
  });
}
