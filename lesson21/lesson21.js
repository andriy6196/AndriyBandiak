const name = prompt(`What is your name `);
alert(`Hi, ${name}!`);

const yearofBirth = prompt(`What is your date of birth `);
alert(`Your date of birth ${2020 - yearofBirth}`);

const sideSquare = prompt(`Enter the length of the side of the square `);
alert(`The side of the square ${4 * sideSquare}`);

const radiusCirle = prompt(`Write the radius of the circle `);
alert(`Area of the circle ${Math.PI * (radiusCirle * radiusCirle)}`);

const distance = prompt(`Distance in km between two cities `);
const time = prompt(`How many hours does he want to get `);
alert(`The speed with which you need to move in order to be on time ${distance / time} km/hours`);

const euro = prompt(`Write the exchange rate for which you want to buy `);
const dollar = prompt(`And here's the currency you sell `);
const money = prompt(`How much currency do you sell? `);
alert(`I think you will have ${dollar / euro * money} `);

const flashDrive = prompt(`How many GB is your flash drive?`);
let gb = 1024;
let file = 820;
alert(`${Math.floor(flashDrive * gb / file)} files`);

const amountOfMoney = prompt(`How much money? `);
const priceChocolate = prompt(`The price of one chocolate bar `);
alert(`You will have ${Math.floor(amountOfMoney / priceChocolate)} chocolate bar`);
alert(`You have ${amountOfMoney - (Math.floor(amountOfMoney / priceChocolate) * priceChocolate)}`);

let number = 0, result = 0;
number = prompt(`Enter a three-digit number`);

while (number > 0) {
    result = result * 10 + number % 10;
    number = Math.floor(number / 10);
}

alert(`Your number is forward ${result}`);

const amouth = prompt(`Deposit amount to the bank for 2 months `);
const yearPercent = (amouth / 100) * 5;
const MonthPercent = (yearPercent / 12) * 2;
alert(`Accrued interest ${MonthPercent} on the deposit `);