let oneWord;
let totalPrise;

const calculateEngravingPrice = function(message, pricePerWord) {
  oneWord = message.split(" ");
  totalPrise = oneWord.length * pricePerWord;
  return totalPrise;
};

console.log(
  "Общая стоимость за эту работу составляет",
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  "Общая стоимость за эту работу составляет",
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  "Общая стоимость за эту работу составляет",
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  "Общая стоимость за эту работу составляет",
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
