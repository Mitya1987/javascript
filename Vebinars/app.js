const numbers = [];

while (true) {
  let input = +prompt("Введите число:");
  numbers.push(input);

  if (input == "" || input == null) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
