const findLongestWord = function (string) {
  let allWords = string.split(' ');
  let largeWord = allWords[0];

  for (let i = 1; i < allWords.length; i += 1) {
    if (allWords[i].length > largeWord.length) {
      largeWord = allWords[i];
    }
  }

  return largeWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
