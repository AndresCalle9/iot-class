const {
    getSensor1Info,
    createValueInfo,
    getValue,
    updateInfo,
    deleteInfo,
} = require('../services/sensor1.services');

const getSensor1Value = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor1Info = await getValue(id);
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

const getSensor1Values = async (req, res) => {
    try {
        const sensor1Info = await getSensor1Info();
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

const createValue = async (req, res) => {
    try {
        const { value } = req.body;
        const { alimento } = req.query;
        const response = await createValueInfo(value, alimento);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }   
};

const updateValue = async (req, res) => {
    //ver como hacer cambio de update de cualquier item no solo de value=temp
    try {
        const { id } = req.query;
        const { field, value } = req.body;
        if (field || value === true) {
            const sensor1Info = await updateInfo(id, field, value);
            return res.json(sensor1Info);
        }
        // const sensor1Info = await updateInfo(id, value);
        // return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

const deleteRecord = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor1Info = await deleteInfo(id);
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSensor1Values,
    getSensor1Value,
    createValue,
    updateValue,
    deleteRecord,
};
  