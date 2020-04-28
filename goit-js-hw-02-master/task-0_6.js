let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  const changeType = Number(input);
  numbers.push(changeType);
}

for (const number of numbers) {
  total += number;
}

console.log(total);
