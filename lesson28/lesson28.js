// ======================================
//                 TASK1
// ======================================

class Circle {
    constructor(radiusValue) {
        this.radius = radiusValue;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {

        this._radius = value;
    }
    get diametr() {

        return 2 * this.radius;
    }
    squareCircle() {
        let square = Math.PI * (this.radius ** 2) / 4;
        return ` This is square: ${square}`;

    }
    lengthCircle() {

        return `this is length of circle: ${2 * Math.PI * this.radius}`;
    }

}
let one = new Circle(5);

console.log(one.diametr);
console.log(one.radius);
console.log(one.lengthCircle());
console.log(one.squareCircle());


// ======================================
//                 TASK2
// ======================================


class Marker {
    constructor(color, colorLeftInPercent) {
        this.color = color,
            this.colorLeftInPercent = colorLeftInPercent;
    }

    writeText(string) {
        string = string.replace(/\s+/g, '');
        const letter = 0.5;

        for (let i = 0; i < string.length; i++) {
            if ((this.colorLeftInPercent < letter)) {
                console.log("this is the \n end of color");
                break;
            }
            this.colorLeftInPercent = this.colorLeftInPercent - (letter)
            console.log(string[i]);
        }

    }

}
class MarkerLoader extends Marker {
    refill(colorRefill) {
        this.colorLeftInPercent += colorRefill;
        console.log(`Marker was refilded till ${this.colorLeftInPercent} persents`)
    }
};

let newMarker = new MarkerLoader("Red", 5);
newMarker.writeText("Cxvfbv");
newMarker.refill(20);

// ======================================
//                 TASK3
// ======================================

class Employee {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
let bankEmployee = [
    new Employee("Vasyl", "Yenevych", 15),
    new Employee("Yelizar", "Ahmetovich", 12),
    new Employee("Burhan", "Shahun-Orglu", 13)
];
class EmpTable {
    constructor(arrEmp) {
        this.bankEmployee = arrEmp

    }
    getHtml() {
        document.write(`<table > <thead>
        <tr>
            <th>Name</th>
            <th> Surname</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>`)
        for (let i of this.bankEmployee) {
            document.write(`   <tr  >
            <td> ${i.name}</td>
            <td>${i.surname}</td>
            <td> ${i.age}</td>
        </tr>`)
        }
        document.write(` </tbody>
        </table>`)
    }
}
let Abank = new EmpTable(bankEmployee);
Abank.getHtml();


