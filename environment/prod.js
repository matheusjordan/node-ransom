const path = require('path');

const extensions = require('../config/extensions');

const environment = {
  remoteServer: 'https://myserver',
  extensions,
  symetricKeyPath: path.join(__dirname, '../keys', 'symetric.key'),
  privateKeyPath: path.join(__dirname, '../keys', 'private.key'),
  passPhrasePath: path.join(__dirname, '../keys', 'passphrase.key'),
};

module.exports = environment;
