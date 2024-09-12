const {database}= require('../utils/functions')


const createData = async (data) => {
    database.push(data);
    return database;
}

module.exports = {
    createData
}