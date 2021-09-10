const db = require('../../data/dbConfig')

async function findAll () {
    const rows = await db('projects');
    return rows.map(item => {return {
        ...item, 
        project_completed: item.project_completed ? true : false
    }});
}

async function findById (id) {
    const row = await db('projects').where('project_id', id).first();
    return {...row, project_completed: row.project_completed ? true : false}
}

async function insert (project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
}

module.exports = { findAll, insert }
