
exports.seed = async function(knex) {
  return await knex('resources').insert([
    {resource_name: 'github'},
    {resource_name: 'laptop'},
    {resource_name: 'vscode'}
  ])
};
