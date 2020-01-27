const path = require('path');

const cleanPath = require('./cleanPath.js');

const cwd = process.cwd();

module.exports = function mergeConfig(config) {
  let {
    in: src,
    themes = {},
    assets = {},
  } = config;

  src = cleanPath(path.join(cwd, src || 'src'))

  if (!Object.keys(themes).length) {
    throw new Error(`Please configure at least one theme.`);
  }

  let {
    in: entry,
    out,
  } = assets;

  if (!entry) {
    entry = path.join(src, '/assets/compiled/index.js');
  }

  if (!out) {
    out = path.join(src, '/assets/');
  }

  return {
    in: cleanPath(src),
    themes,
    assets: {
      ...assets,
      in: entry,
      out,
    },
  };
}
