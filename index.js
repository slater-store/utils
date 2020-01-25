const getFileKey = require("./lib/getFileKey.js");
const cleanPath = require("./lib/cleanPath.js");
const cleanPathSeparators = require("./lib/cleanPathSeparators.js");
const findAllFiles = require("./lib/findAllFiles.js");
const isShopifyFile = require("./lib/isShopifyFile.js");

module.exports = {
  getFileKey,
  cleanPath,
  cleanPathSeparators,
  findAllFiles,
  isShopifyFile,
};
