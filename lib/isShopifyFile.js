const getFileKey = require("./getFileKey.js");

module.exports = function isShopifyFile(file) {
  return Boolean(getFileKey(file));
}
