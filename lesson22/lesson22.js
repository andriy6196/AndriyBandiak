const age = prompt(`How old are you? `);

if (age >= 0 && age <= 11) {
    alert(`You're a child `);
} else if (age >= 12 && age < 18) {
    alert(`You're a teenager `);
} else if (age >= 18 && age < 60) {
    alert(`You're an adult `);
} else if (age >= 60) {
    alert(`You're a pensioner `);
}

const number = prompt(`Enter a number from 0 to 9 `);
const specialCharacter = `The special character that is located on this key`;

switch (Number(number)) {
    case 0:
        alert(`${specialCharacter} - )`);
        break;
    case 1:
        alert(`${specialCharacter} - !`);
        break;
    case 2:
        alert(`${specialCharacter} - @`);
        break;
    case 3:
        alert(`${specialCharacter} - #`);
        break;
    case 4:
        alert(`${specialCharacter} - $`);
        break;
    case 5:
        alert(`${specialCharacter} - %`);
        break;
    case 6:
        alert(`${specialCharacter} - ^`);
        break;
    case 7:
        alert(`${specialCharacter} - &`);
        break;
    case 8:
        alert(`${specialCharacter} - *`);
        break;
    case 9:
        alert(`${specialCharacter} - (`);
        break;
    default:
        alert(`You entered something wrong `);
}

const threeDigitNum = prompt(`Enter a three digit number and I will check if it has the same digits `);

if (threeDigitNum[0] == threeDigitNum[1] && threeDigitNum[1] == threeDigitNum[2]) {
    alert(`All digits are the same `);
} else if (threeDigitNum[0] == threeDigitNum[1]) {
    alert(`The first and second digits are the same `);
} else if (threeDigitNum[1] == threeDigitNum[2]) {
    alert(`The second and third digits are the same`);
} else if (threeDigitNum[0] == threeDigitNum[2]) {
    alert(`The first and third digits are the same`);
} else {
    alert(`There are no identical numbers`);
}



const year = prompt(`Enter a year to find out if he is leap year `);

if (year % 400 == 0) {
    alert(`Year is a leap`);
} else if ((year % 4 == 0) && (year % 100 !== 0)) {
    alert(`Year is a leap`);
} else {
    alert(`Year not a leap`, + year + `.`);
}

const fiveDigitNum = prompt(`Enter a five digit number and I will check if it a palindrome `);

if (fiveDigitNum[0] == fiveDigitNum[4] && fiveDigitNum[1] == fiveDigitNum[3]) {
    alert(`Num is palindrome`);
} else {
    alert(`Num is not palindrome`);
}

const euro = 0.90;
const uah = 27.50;
const azn = 1.6;
const dollars = prompt(`The amount of dollars you want to change? `);
alert(`You have ${dollars}`)

const convertCurrency = Number(prompt(`What currency does it want to convert EUR [1], UAN[2] or AZN [3]`));
switch (convertCurrency) {
    case 1:
        alert(`You will get ${euro * dollars} Euro`);
        break;

    case 2:
        alert(`You will get ${uah * dollars} UAH`);
        break;

    case 3:
        alert(`You will get ${azn * dollars} Azerbaijan Manats`);
        break;

    default:
        alert(`Sorry, we are out of dollars `);
}

const purchaseAmount = Number(prompt(`Request a purchase amount `));

if (purchaseAmount >= 500) {
    alert(`Your purchase price - ${Math.floor(purchaseAmount / '1.07')} `)
} else if (500 > purchaseAmount && purchaseAmount >= 300) {
    alert(`Your purchase price - ${Math.floor(purchaseAmount / `1.05`)} `)
} else if (300 > purchaseAmount && purchaseAmount >= 200) {
    alert(`Your purchase price - ${Math.floor(purchaseAmount / '1.03')} `)
} else {
    alert(`Your purchase price - ${purchaseAmount}`);
}

const squareCircumference = Number(prompt(`Write the circumference of the square `));
const squarePerimeter = Number(prompt(`Write the perimeter of the square `));

if (squarePerimeter > squareCircumference) {
    alert(`Such a circle fits in the specified square `);
} else {
    alert(`Oh, the circle doesn't fit in a square `);
}

const firstQuestion = Number(prompt(`What is year today? for:'2015' press[1], for:'1754' press[2] or for:'2020' press[3]`));
const secondQuestion = Number(prompt(`In what year did Ukraine become independent? for:'1990' press[1], for:'1991' press[2], for:'2001' press[3]`));
const thirdQuestion = Number(prompt(`Ukraine is? for:'presidential-parliamentary republic' press[1], for:'parliamentary-presidential republic' press[2], for:'monarchy' press[3]`));
let questionResult = 0;

switch (firstQuestion) {
    case 1:

        break;

    case 2:

        break;

    case 3:
        questionResult += 2;
        break;

    default:
        alert(`Sorry, we are out of " + firstQuestion + "."`);
}

switch (secondQuestion) {
    case 1:
        break;

    case 2:
        questionResult += 2;

    case 3:
        break;

    default:
        alert(`Sorry, we are out of " + secondQuestion + "."`);
}

switch (secondQuestion) {
    case 1:
        break;

    case 2:
        questionResult += 2;

    case 3:
        break;

    default:
        alert(`Sorry, we are out of " + secondQuestion + "."`);
}
alert(`Your result - ${questionResult}/6`);

const setYear = Number(prompt(`Set the Year:`));
const setMounth = Number(prompt(`Set the Mounth from 1 to 12:`));
const SetDay = Number(prompt(`Set the day in your mounth:`));
let d = new Date();
d.setFullYear(setYear, (setMounth - 1), SetDay);
alert(`${d}`);