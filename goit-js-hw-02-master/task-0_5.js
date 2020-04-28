const checkForSpam = function (message) {
  const words = message.toLowerCase().split(' ');
  let wordFind = false;

  for (const word of words) {
    if (word === '[spam]' || word === 'sale') {
      // Как сравнивать строку spam в скобках [], тоесть частичное совпадение?
      wordFind = true;
    }
  }

  return wordFind;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Почему не работает этот вариант? Подскажите пожалуйста.

// const checkForSpam = function (message) {
//     const words = message.toLowerCase().split(' ');
//     let wordFind;

//     for (const word of words) {
//       wordFind = word === '[spam]' || word === 'sale' ? true : false;
//     }

//     return wordFind;
//   };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
//   console.log(checkForSpam('Latest technology news')); // false

//   console.log(checkForSpam('JavaScript weekly newsletter')); // false

//   console.log(checkForSpam('Get best sale offers now!')); // true

//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
