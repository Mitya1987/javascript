let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  const changeType = Number(input);
  if (changeType >= 0) {
    numbers.push(changeType);
  }
}

for (const number of numbers) {
  if (numbers.length > 0) {
    total += number;
  }
}

console.log(`Общая сумма равна ${total}`);
