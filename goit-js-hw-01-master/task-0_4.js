const credits = 23580;

const pricePerDroid = 3000;

let input = prompt("Сколько дронов хотите купить?");

let totalPrice = Number.input * pricePerDroid;

if (totalPrice <= credits) {
  totalPrice = pricePerDroid * input;
  console.log(
    `Вы купили ${Number(input)} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
} else if (input === null) {
  alert("Отменено пользователем!");
} else {
  console.log("Недостаточно средств на счету!");
}
