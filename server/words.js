const wordList = require('../words.json');

module.exports = function() {
  let output = wordList;
  let i = wordList.length - 1;

  for (i; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = wordList[randomIndex];

    output[randomIndex] = wordList[i];
    output[i] = itemAtIndex;
  }

  return output.slice(0, 25);
}
