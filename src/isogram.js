const isIsogram = (word) => {
  const letterCount = {};
  // go through each letter in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // ignore spaces and hyphens
    if (letter === ' ' || letter === '-') {
      continue;
    }
    // if the letter is repeated, return false
    if (letterCount[letter]) {
      return false;
    }
    // mark the letter as seen
    letterCount[letter] = 1;
  }
  return true;
};

module.exports = { isIsogram };
