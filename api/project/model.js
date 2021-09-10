const db = require('../../data/dbConfig')

async function findAll () {
    return db('projects');
}

async function findById (id) {
    return db('projects').where('id', id);
}

async function insert (project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
}

module.exports = { findAll, insert }
