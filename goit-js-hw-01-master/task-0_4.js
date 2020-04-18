const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let userInput = prompt('Сколько дроилов хотите купить?');

if (userInput === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(userInput) * 3000;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
