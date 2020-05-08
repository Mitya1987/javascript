const petya = {
  name: 'Petya',
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.name);
  },
};

petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'
