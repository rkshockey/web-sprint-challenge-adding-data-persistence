
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('tasks').insert([
    { task_description: 'fork and clone repo', project_id: 1 },
    { task_description: 'complete test', project_id: 1 }
  ])
};
