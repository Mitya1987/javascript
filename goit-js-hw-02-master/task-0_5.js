const wordToFind = "spam";
const wordToFind2 = "sale";

const checkForSpam = function(message) {
  let words = message.toLowerCase();
  const isInWords = words.includes(wordToFind) || words.includes(wordToFind2);

  return isInWords ? true : false;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
