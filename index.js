const getFileKey = require("./lib/getFileKey.js");
const cleanPath = require("./lib/cleanPath.js");
const cleanPathSeparators = require("./lib/cleanPathSeparators.js");
const findAllFiles = require("./lib/findAllFiles.js");
const isShopifyFile = require("./lib/isShopifyFile.js");
const getConfig = require("./lib/getConfig.js");
const mergeConfig = require("./lib/mergeConfig.js");

module.exports = {
  getFileKey,
  cleanPath,
  cleanPathSeparators,
  findAllFiles,
  isShopifyFile,
  getConfig,
  mergeConfig,
};
