const modelUser = require('../models/users.models');
const modeCredentials = require('../models/credentials.models');
    
const getUser = async (dniUser) => {
    const result = await modelUser.getUser(dniUser);
    return result;
};
const getLogin = async (username, password) => {
    const result = await modelCredentials.findOne({
        where: { username: username, password: password},
    });
    return result;
};

module.exports = {
    getUser,
    getLogin,
};