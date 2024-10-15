const {
    getSensor2Info,
    createValueInfo2,
    getValue,
    updateInfo,
    deleteInfo,
} = require('../services/sensor2.service');

const getSensor2Value = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor2Info = await getValue(id);
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

const getSensor2Values = async (req, res) => {
    try {
        const sensor2Info = await getSensor2Info();
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

const createValue = async (req, res) => {
    try {
        const { value } = req.body;
        const { alimento } = req.query; //que viene de pantalla
        const response = await createValueInfo2(value, alimento);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }   
};

const updateValue = async (req, res) => {
    try {
        const { id} = req.query;
        const { field, value } = req.body; //este sin field solo cambia el value...
        if (field || value === true) {
            const sensor2Info = await updateInfo(id, field, value);
            return res.json(sensor2Info);
        }
    } catch (error) {
        console.log(error);
    }
};

const deleteRecord = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor2Info = await deleteInfo(id);
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSensor2Values,
    getSensor2Value,
    createValue,
    updateValue,
    deleteRecord,
};
  