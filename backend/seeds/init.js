export async function seed(knex) { // eslint-disable-line
  await knex('users').insert({ id: '7c47b145-729b-4a62-818b-a3ebc2fbfb7c', username: 'Yushan', password: '123' });
  await knex('users').insert({ id: '605eb99e-1ee3-4bd9-b54c-1eb2295bb7df', username: 'Fan', password: '123' });
}
