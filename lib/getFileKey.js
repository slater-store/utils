module.exports = function getFileKey(file, root) {
  if (!root) {
    throw new Error('getFileKey requires that you pass a root directory');
  }

  const normalizedRootPath = '/' + root.replace(/^\/|\/$/g, '') + '/';
  const relativeFilePath = file.replace(normalizedRootPath, '');

  if (
    !/^(layout|content|frame|pages|templates|sections|snippets|config|locales|assets)/.test(
      relativeFilePath
    )
  ) {
    return null;
  }

  return relativeFilePath;
};
