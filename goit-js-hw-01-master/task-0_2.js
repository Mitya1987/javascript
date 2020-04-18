// Вариант 1
// const total = 100;
// const ordered = 200;

// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// Вариант 2
const total = 100;
let ordered;
const orderedInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('.bt_1');

buttonRef.addEventListener('click', function () {
  console.log('Вы хотите заказать: ', orderedInputRef.value);

  ordered =
    orderedInputRef.value > total
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  console.log(ordered);
});
