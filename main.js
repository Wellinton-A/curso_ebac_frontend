class Product {
    constructor(name, price, quantity, department) {
        this.name = name;
        this.department = department;
        this.price = price;
        this.quantity = quantity;
    }

    discount(percent) {
        if (percent > 1) {
            percent /= 100;
        }
        this.price *= (1 - percent);
    }

    sold(quant) {
        if (this.quantity >= quant && quant > 0) {
            this.quantity -= quant
        } else {
            console.log(`invalid input: ${quant}`)
        }
    }
}

class Laptop extends Product {
    constructor(name, price, quantity, department, manufacturer) {
        super(name, price, quantity, department);
        this.manufacturer = this.manufacturer
    }
}

class Smartphone extends Product {
    constructor(name, price, quantity, department, manufacturer, screenSize) {
        super(name, price, quantity, department);
        this.manufacturer = this.manufacturer;
        this.screenSize = this.screenSize;
    }
}

const laptop1 = new Laptop('laptop1', 1600, 50, 'computing', 'Dell');
const smartphone1 = new Smartphone('smartphone1', 959, 150, 'Phohe', 'Apple', 5.4)
const laptop2 = new Laptop('laptop2', 2100, 18, 'computing', 'Apple');

console.log(laptop1.price)
laptop1.discount(10)
console.log(laptop1.price)
console.log(laptop2.quantity)
laptop2.sold(3)
laptop2.sold(18)
console.log(laptop2.quantity)
