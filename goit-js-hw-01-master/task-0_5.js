const China = "китай";
const Chile = "чили";
const Australia = "австралия";
const India = "индия";
const Jamaica = "ямайка";

let userAnswer = prompt("Укажите страну доставки");

const lowAnswer = userAnswer.toLowerCase();

let price;
let message;

switch (lowAnswer) {
  case China:
    price = 100;
    message = `Доставка в ${userAnswer} будет стоить ${price} кредитов`;
    break;

  case Chile:
    price = 250;
    message = `Доставка в ${userAnswer} будет стоить ${price} кредитов`;
    break;

  case Australia:
    price = 170;
    message = `Доставка в ${userAnswer} будет стоить ${price} кредитов`;
    break;

  case India:
    price = 80;
    message = `Доставка в ${userAnswer} будет стоить ${price} кредитов`;
    break;

  case Jamaica:
    price = 120;
    message = `Доставка в ${userAnswer} будет стоить ${price} кредитов`;
    break;

  default:
    alert(`В вашей стране доставка не доступна`);
}

console.log(message);
