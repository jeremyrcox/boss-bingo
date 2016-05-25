const wordList = require('../words.json');

module.exports = function() {
  var output = wordList;
  var i = wordList.length - 1;

  for (i; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = wordList[randomIndex];

    output[randomIndex] = wordList[i];
    output[i] = itemAtIndex;
  }

  return output.slice(0, 25);
}
