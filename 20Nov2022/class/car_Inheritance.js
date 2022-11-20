
class Car {
    constructor(name, color) {
        this.brand = name;
        this.color = color;
    }

    // Method in Classes
    present() {
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(year, price) {
        super("Ford", "Black");
        this.year = year;
        this.price = price;
    }
}

const carObj = new Car("Ford");
const modeelObj = new Model("2022", "180k");

//   console.log(carObj);
console.log(modeelObj);
console.log(modeelObj.present());