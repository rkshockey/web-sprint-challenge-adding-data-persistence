const db = require('../../data/dbConfig')

async function findAll () {
    const rows = await db('tasks');
    return rows.map(item => {return {
        ...item,
        task_completed: item.task_completed ? true : false
    }});
}

async function findById (id) {
    const row = await db('tasks').where('task_id', id).first()
    return {...row, task_completed: row.task_completed ? true : false}
}

async function insert (task) {
    const [id] = await db('tasks').insert(task)
    return findById(id)
}

module.exports = { findAll, insert }
