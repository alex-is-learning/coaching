function convertToTag(text) {
    return text.toLowerCase().replace(' ', '-');
}

module.exports = {
  convertToTag: (text) => convertToTag(text),
};