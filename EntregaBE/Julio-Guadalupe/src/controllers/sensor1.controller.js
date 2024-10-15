const {
    sensor1Create,
    sensor1All,
    sensor1GetValues,
    sensor1UpdateValueInfo,
    sensor1DeleteInfo,
} = require("../services/sensor1service.js");

const getSensor1Values = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor1Info = await sensor1GetValues(id);
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

const getSensor1Value = async (req, res) => {
    try {
        const sensor1Info = await sensor1All();
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

const sensor1createValue = async (req, res) => {
    try {
        const { value } = req.body;
        const { paciente } = req.query; 
        const response = await sensor1Create(value, paciente);
        return res.json(response);
    } catch (error) {
        console.log(error);
    }   
};

const sensor1updateValue = async (req, res) => {
    try {
        const { id} = req.query;
        const { field, value } = req.body; //este sin field solo cambia el value...
        if (field || value === true) {
            const sensor1Info = await sensor1UpdateValueInfo(id, field, value);
            return res.json(sensor1Info);
        }
    } catch (error) {
        console.log(error);
    }
};

const sensor1deleteRecord = async (req, res) => {
    try {
        const { id } = req.query;
        const sensor1Info = await sensor1DeleteInfo(id);
        return res.json(sensor1Info);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSensor1Values,
    getSensor1Value,
    sensor1createValue,
    sensor1updateValue,
    sensor1deleteRecord,
};