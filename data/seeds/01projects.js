
exports.seed = async function(knex) {
  return await knex('projects').insert([
    {project_name: 'Sprint Challenge'}
  ])
};
