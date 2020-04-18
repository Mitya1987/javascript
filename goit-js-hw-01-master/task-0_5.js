// let message;
// let cargoPrice;
// let userInput = prompt('Введите страну доставки');
// userInput = userInput.toLowerCase();

// switch (userInput) {
//   case 'китай':
//     cargoPrice = 100;
//     message = `Доставка в ${userInput} будет стоить ${cargoPrice} кредитов`;
//     break;

//   case 'чили':
//     cargoPrice = 250;
//     message = `Доставка в ${userInput} будет стоить ${cargoPrice} кредитов`;
//     break;

//   case 'австралия':
//     cargoPrice = 170;
//     message = `Доставка в ${userInput} будет стоить ${cargoPrice} кредитов`;
//     break;

//   case 'индия':
//     cargoPrice = 80;
//     message = `Доставка в ${userInput} будет стоить ${cargoPrice} кредитов`;
//     break;

//   case 'ямайка':
//     cargoPrice = 120;
//     message = `Доставка в ${userInput} будет стоить ${cargoPrice} кредитов`;
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }

// console.log(message);

let message;
let cargoPrice;
const countryInputRef = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('.btn_2');

buttonRef.addEventListener('click', function () {
  switch (countryInputRef.velue) {
    case 'китай':
      cargoPrice = 100;
      message = `Доставка в ${countryInputRef.velue} будет стоить ${cargoPrice} кредитов`;
      break;

    case 'чили':
      cargoPrice = 250;
      message = `Доставка в ${countryInputRef.velue} будет стоить ${cargoPrice} кредитов`;
      break;

    case 'австралия':
      cargoPrice = 170;
      message = `Доставка в ${countryInputRef.velue} будет стоить ${cargoPrice} кредитов`;
      break;

    case 'индия':
      cargoPrice = 80;
      message = `Доставка в ${countryInputRef.velue} будет стоить ${cargoPrice} кредитов`;
      break;

    case 'ямайка':
      cargoPrice = 120;
      message = `Доставка в ${countryInputRef.velue} будет стоить ${cargoPrice} кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }

  console.log(message);
});
