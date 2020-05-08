const findBestEmployee = function (employees) {
  let findProductive;
  const allTasks = Object.entries(employees);

  let theMostProductive = allTasks[0][1];
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i][1] >= theMostProductive) {
      theMostProductive = allTasks[i][1];
      findProductive = allTasks[i][0];
    }
  }

  return findProductive;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // Lux

//     const allTasks = Object.values(employees);
//   let theMostProductive = allTasks[0];
//   for (let i = 1; i < allTasks.length; i += 1) {
//     if (allTasks[i] > theMostProductive) {
//       theMostProductive = allTasks[i];
//     }
//   }
//   return theMostProductive;
