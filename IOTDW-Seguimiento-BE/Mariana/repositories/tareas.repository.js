let db = require("../utils/BD");

const post1Rep = (data) => {
    db.push(data);
    return db
}

const getRep = () => {
    return db
}

const put = (data) => {
    db = data
}

module.exports = {
    post1Rep,
    getRep,
    put
}