const path = require('path');
const test = require('ava');
const getFileKey = require('../lib/getFileKey.js');

test('works', t => {
  const key = getFileKey(`/src/snippets/foo.liquid`);
  t.is(key, `snippets/foo.liquid`);
});

test('invalid filename', t => {
  const key = getFileKey(`/src/bar/foo.liquid`);
  t.is(key, null);
});
