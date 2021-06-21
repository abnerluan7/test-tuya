const testDevice = require('../repository/tuyaDeviceRepository');
const testDeviceTest = require('../repository/tuyaDeviceSetRepository');

exports.get = async (req, res, next) => {
    //testDevice();
    await testDeviceTest();
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send('Requisição recebida com sucesso!');
};