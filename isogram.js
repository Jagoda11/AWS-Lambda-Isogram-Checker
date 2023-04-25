const isIsogram = (word) => {
  const letterCount = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter === ' ' || letter === '-') {
      continue;
    }
    if (letterCount[letter]) {
      return false;
    }
    letterCount[letter] = 1;
  }
  return true;
};

module.exports = { isIsogram };
