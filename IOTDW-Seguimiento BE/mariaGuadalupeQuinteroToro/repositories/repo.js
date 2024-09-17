const db = require('../utils/database')

const create= async (data) => {
    db.push(data);
    return db;
}

module.exports = {
    create
}