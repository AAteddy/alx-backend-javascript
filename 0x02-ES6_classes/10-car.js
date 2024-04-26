export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cloned = new this.constructor();
    const symbols = Object.getOwnPropertySymbols(this);
    symbols.forEach((symbol) => {
      cloned[symbol] = this[symbol];
    });
    return cloned;
  }
}
