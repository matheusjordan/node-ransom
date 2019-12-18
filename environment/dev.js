const path = require('path');

const extensions = require('../config/extensions');

const environment = {
  remoteServer: 'http://localhost:3333',
  extensions,
  symetricKeyPath: path.join(__dirname, '../keys', 'symetric.key'),
  privateKeyPath: path.join(__dirname, '../keys', 'private.key'),
  passPhrasePath: path.join(__dirname, '../keys', 'passphrase.key'),
};

module.exports = environment;
