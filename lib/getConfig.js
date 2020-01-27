const path = require('path');

const mergeConfig = require('./mergeConfig.js');

const cwd = process.cwd();

module.exports = function getConfig(file = './slater.config.js') {
  return mergeConfig(require(path.join(cwd, file)));
}
