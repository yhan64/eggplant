export async function up(knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.createTable('users', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    t.timestamp('created_at').defaultTo(knex.raw('now()'));
    t.string('username');
    t.string('password');
  });

  await knex.schema.createTable('tasks', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    t.timestamp('created_at').defaultTo(knex.raw('now()'));
    t.uuid('user_id').references('users.id');
    t.string('content');
    t.date('due_date');
    t.integer('impact');
    t.enu('status', ['open', 'done', 'closed']);
    t.integer('time_consumed');
  });
}

export async function down(knex) {
  await knex.schema.dropTable('tasks');
  await knex.schema.dropTable('users');
}
