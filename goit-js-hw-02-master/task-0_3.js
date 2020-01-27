let longestWord;

const findLongestWord = function(string) {
  let wordOfString = string.split(" ");
  longestWord = wordOfString[0];
  for (let i = 1; i < wordOfString.length; i += 1) {
    if (wordOfString[i].length > longestWord.length) {
      longestWord = wordOfString[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
