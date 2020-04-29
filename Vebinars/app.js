const text1 = 'Curabitur ligula sapien, tincidunt non.';
const text2 = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
const text3 = 'Curabitur ligula sapien.';
const text4 = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';

const formatString = function (string) {
  if (string.length > 40) {
    let arrayFromString = [];
    for (let i = 0; i < 40; i += 1) {
      console.log(string[i]);
      arrayFromString += string[i];
    }
    return arrayFromString + '...';
  }
  return text1;
};

console.log(formatString(text1));
console.log(formatString(text2));
console.log(formatString(text3));
console.log(formatString(text4));
