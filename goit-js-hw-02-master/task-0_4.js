const formatString = function(string) {
  const symbol = string;
  let numbOfSymb = 40;

  if (symbol.length <= numbOfSymb) {
    return string;
  } else {
    return string.substring(0, numbOfSymb) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
