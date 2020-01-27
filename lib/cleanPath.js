const path = require("path");
const fixPathSeparators = require("./cleanPathSeparators.js");
const cwd = fixPathSeparators(process.cwd());

// makes sure we have a valid absolute path
module.exports = function cleanPaths(p) {
  return fixPathSeparators(
    path.join(cwd, fixPathSeparators(p).replace(cwd, ""))
  );
};
