const path = require('path');
const test = require('ava');

const { mergeConfig } = require('../index.js');

const cwd = process.cwd();

test('works', t => {
  const config = mergeConfig({
    themes: {
      dev: {}
    }
  });

  t.is(config.in, path.join(cwd, `src`));
  t.is(config.assets.in, path.join(cwd, `src/assets/compiled/index.js`));
  t.is(config.assets.out, path.join(cwd, `src/assets/`));
});
