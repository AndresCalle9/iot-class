const dataBase = require("../utils/db");


const create = (data) => {
    dataBase.push(data);
    console.log(dataBase);
};

module.exports = {
    create
}