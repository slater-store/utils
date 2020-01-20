const path = require("path");
const fixPathSeparators = require("./cleanPathSeparators.js");
const cwd = fixPathSeparators(process.cwd());

module.exports = function abs(p) {
  return fixPathSeparators(
    path.join(cwd, fixPathSeparators(p).replace(cwd, ""))
  );
};
