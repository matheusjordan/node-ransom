const prodEnvironment = require('../environment/prod');
const devEnvironment = require('../environment/dev');

module.exports = process.env.NODE_ENV === 'production' ?
                prodEnvironment : devEnvironment;

