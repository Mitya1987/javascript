let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  const changeType = Number(input);
  if (changeType > 0) {
    numbers.push(changeType);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
} else {
  alert('Массив пуст');
}

console.log(`Общая сумма равна ${total}`);
