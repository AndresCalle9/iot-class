const { db } = require("../config/database/firebase");

const createDataSensorTwo = async (data) => {
    try{
        await db.collection('inv').add(data);
        return true;

    } catch (error) {
        console.log(error);
    }
};

const getAllDataSensorTwo = async () => {
    try{
        const data = await db.collection('inv').get();
        return data.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
    } catch (error) {
        console.log(error);
    }
};

const getIdDataSensorTwo = async (id) => {
    try{    
        const result = await db.collection('inv').doc(id).get();
        return result.data();
    } catch (error) {
        console.log(error);
    }
};

const updateDataSensorTwo = async (id, body) => {
    try{
        await db.collection('inv').doc(id).update(body);
        return true;
    } catch (error) {
        console.log(error);
    }
};

const deleteDataSensorTwo = async (id) => {
    try{
        const result = db.collection('inv').doc(id);
        return result.delete()
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createDataSensorTwo,
    getAllDataSensorTwo,
    getIdDataSensorTwo,
    updateDataSensorTwo,
    deleteDataSensorTwo
};
