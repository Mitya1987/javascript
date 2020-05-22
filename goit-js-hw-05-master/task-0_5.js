class Car {
  static getSpecs(car) {
    console.log(Object.values(car.car));
  }

  constructor(car) {
    this.car = car;
    this.car.speed = 0;
    this.car.isOn = false;
    this.car.distance = 0;
  }

  get price() {
    return this.car.price;
  }

  set price(price) {
    this.car.price = price;
  }

  turnOn() {
    this.car.isOn = true;
  }

  turnOff() {
    this.car.isOn = false;
    this.car.speed = 0;
  }

  accelerate(value) {
    if (this.car.speed + value <= this.car.maxSpeed) {
      this.car.speed += value;
    }
  }

  decelerate(value) {
    if (this.car.speed + value >= 0) {
      this.car.speed -= value;
    }
  }

  drive(hours) {
    if (this.car.isOn) {
      this.car.distance = hours * this.car.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
