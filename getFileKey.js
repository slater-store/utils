module.exports = function getFileKey(p) {
  if (!p) return null;

  if (/^\//.test(p)) {
    return getFileKey(p.substr(1));
  }

  if (
    !/^(layout|content|frame|pages|templates|sections|snippets|config|locales|assets)/.test(
      p
    )
  ) {
    return getFileKey(
      p
        .split("/")
        .slice(1)
        .join("/")
    );
  }

  return p;
};
