
exports.up = async function(knex) {
  return await knex.schema
    .createTable('projects', table => {
        table.increments('project_id');
        table.string('project_name').notNullable();
        table.string('project_description');
        table.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', table => {
        table.increments('resource_id');
    })
    .createTable('tasks', table => {
        table.increments('task_id');
    })
    .createTable('project_resources', table => {
        table.increments('item_id');
    })
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
};
