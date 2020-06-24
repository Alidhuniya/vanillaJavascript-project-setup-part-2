export class Info {
  constructor(name, age, address, weather, direction) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.weather = weather;
    this.direction = direction;
  }

  direct() {
    return ` My direction is ${this.direction}`;
  }
}
