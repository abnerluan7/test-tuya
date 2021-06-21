const TuyAPI = require('tuyapi');

const testDeviceTest = async () => {
    const device = new TuyAPI({
        id: '52422280bcddc2a25617',
        key: '960be15ca59985b9',
        ip: '201.68.203.100',
        version: '3.3',
        issueRefreshOnConnect: true,
        issueGetOnConnect: false
    });
    
    await device.find();

    await device.connect();

    let status = await device.get();

    console.log(`Current status: ${status}.`);

    await device.set({set: !status});

    status = await device.get();

    console.log(`New status: ${status}.`);

    device.disconnect();
};

module.exports = testDeviceTest;