const numberFirst = Number(prompt('Set range. From'));
const numberSecond = Number(prompt('Set range. Till'));
let counter = 0;
for (let i = numberFirst; i < numberSecond; i++) {
    console.log(`The sum of all numbers ${counter += i}`);
}



let firstNumber = Number(prompt(`First num `));
let secondNumber = Number(prompt(`Second num `));
while (firstNumber != secondNumber) {
    if (firstNumber > secondNumber)
        firstNumber = firstNumber - secondNumber
    else
        secondNumber = secondNumber - firstNumber;
}
console.log("greatest common factor", firstNumber);



const numberThreeTask = Number(prompt('Write one num'));
for (let i = 1; i <= numberThreeTask; i++) {
    if (numberThreeTask % i == 0)
        console.log('divisors of this number', i);
};


const numberFourTask = prompt('Write one num');
const toArray = Array.from(numberFourTask);
const countDigits = toArray.length;

console.log('Number of digits', countDigits);


let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Number(prompt('enter 10 numbers')));
}

let counterOne = 0;
let counterSecond = 0;
let counterThird = 0;
let counterFour = 0;
let counterFive = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        counterOne++;
    } else if (numbers[i] < 0) {
        counterSecond;
    } else if (numbers[i] == 0) {
        counterThird
    }
    if (numbers[i] % 2 == 0) {
        counterFour++;
    } else if (numbers[i] % 2 == 1) {
        counterFive++;
    }
};
console.log('positive', counterOne);
console.log('negative', counterSecond);
console.log('zero', counterThird);
console.log('even', counterFour);
console.log('odd', counterFive);


let numberSixTask;
do {
    let numberSixFirst = Number(prompt('Number one'));
    let numberSixSecond = Number(prompt('Number Second'));
    let numberSixThird = prompt('Operator');
    if (numberSixThird == '+') {
        console.log(numberSixFirst + numberSixSecond);
    } else if (numberSixThird == '-') {
        console.log(numberSixFirst - numberSixSecond);
    } else if (numberSixThird == '*') {
        console.log(numberSixFirst * numberSixSecond);
    } else if (numberSixThird == '/') {
        console.log(numberSixFirst / numberSixSecond);
    }
    numberSixTask = prompt('Continue? type [1] if "Yes" or [2] if "No"');
} while (numberSixTask == 1);


let numberSevenTask = prompt('Number for moving');
let move = Number(prompt('Counts of move'));
let massNumbers = Array.from(numberSevenTask);

for (let i = 0; i < move; i++) {
    let first_position = massNumbers.shift();
    massNumbers.push(first_position);
}
let reversed = massNumbers.join('');
console.log('Result', reversed);


let dayName = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

for (let i = 0; i < dayName.length; i++) {
    console.log(dayName[i]);
    let way = prompt("You want to start type: [ok]");
    if (way == 'ok')
        break;
}

for (i = 2; i < 10; i++) {
    console.log(i);
    for (let j = 1; j < 11; j++) {
        console.log(`${i}*${j}=${i * j}`);
    }
};


let Z = 0;
let N = 50;
let K = 100;
let condition;
console.log('whish number between 0 and 100');
do {
    let result = prompt(" You number is bigger, less, or equal:", N);
    if (result == ">") {
        Z = N;
        N = N + Math.floor((K - N) / 2);
        console.log("is bigger:", N);
        condition = false;
    } else if (result == "<") {
        K = N;
        N = Z + Math.floor((N - Z) / 2);
        console.log("is less:", N);
        condition = false;
    } else if (result == "=") {
        console.log(N);
        condition = true;
    }
} while (condition == false);
