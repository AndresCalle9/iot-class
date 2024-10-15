const {
    sensor2Create,
    sensor2All,
    sensor2GetValues,
    sensor2UpdateValueInfo,
    sensor2DeleteInfo,
} = require("../services/sensor2service.js");

const getSensor2Value = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor2Info = await sensor2GetValues(id);
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

const getSensor2Values = async (req, res) => {
    try {
        const sensor2Info = await sensor2All();
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

const sensor2createValue = async (req, res) => {
    try {
        const { value } = req.body;
        const { alimento } = req.query; //que viene de pantalla
        const response = await sensor2Create(value, alimento);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }   
};

const sensor2updateValue = async (req, res) => {
    try {
        const { id} = req.query;
        const { field, value } = req.body; //este sin field solo cambia el value...
        if (field || value === true) {
            const sensor2Info = await sensor2UpdateValueInfo(id, field, value);
            return res.json(sensor2Info);
        }
    } catch (error) {
        console.log(error);
    }
};

const sensor2deleteRecord = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor2Info = await sensor2DeleteInfo(id);
        return res.json(sensor2Info);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSensor2Values,
    getSensor2Value,
    sensor2createValue,
    sensor2updateValue,
    sensor2deleteRecord,
};