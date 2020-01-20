const path = require('path');
const test = require('ava');
const getFileKey = require('../getFileKey.js');

test('works', t => {
  const key = getFileKey(`/src/snippets/foo.liquid`);
  t.is(key, `snippets/foo.liquid`);
});
