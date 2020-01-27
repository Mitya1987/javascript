const ADMIN_PASSWORD = prompt("Введите пароль");
let message;

if (ADMIN_PASSWORD !== "jqueryismyjam") {
  message = "Доступ запрещен, неверный пароль!";
} else if (ADMIN_PASSWORD === null) {
  message = "Отменено пользователем!";
} else {
  message = "Добро пожаловать!";
}

alert(message);
