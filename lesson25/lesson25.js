let numberOne = Number(prompt('Write num one '));
let numberTwo = Number(prompt('Write num two '));

function numbers() {
    if (numberOne < numberTwo) {
        console.log(-1);
    } else if (numberOne > numberTwo) {
        console.log(1);
    } else if (numberOne == numberTwo) {
        console.log(0);
    } else {
        console.log('error ');
    }
};

numbers();

function factorialNumber(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return (n * factorialNumber(n - 1));
    }
};

console.log(` The result wiil be:  ${factorialNumber(prompt('Enter number for factorial'))}`);


let x = prompt('Write first num ');
let b = prompt('Wtire second num ');
let y = prompt('Write third ');

function threeSepNumbers() {
    console.log(x + b + y);
}
threeSepNumbers();

const rectangleLength = prompt('Num Length');
const rectangeWidth = prompt('Num Width');

function squareArea(x, y) {
    let squareAreaEquation = y ? x * y : x * x;
    console.log(squareAreaEquation);
}
squareArea(rectangleLength, rectangeWidth);

const digit = prompt('Write num ');
function perfectNumber() {
    let result = 0;
    for (let i = 1; i <= (2 * n - 1); i++) {
        if (i % 2 != 0) {
            result = (i * i * i) + result;
        }
    }
    let idealNumber = (n * n) * ((2 * n * n) - 1);
    return result === idealNumber ? 'Perfect number' : 'No perfect number';
}
console.log(perfectNumber(digit));

function digitTwo() {
    let a = prompt('Enter number');

    function perfectNumber(a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                result += i;
            }

        };
        if (result == a) {
            console.log(`This digit is perfect: ${a}`);
        } else
            console.log(`This digit is not perfect: ${a}`)
    }
    perfectNumber(a);
};
digitTwo();


function task6() {

    let numberFirstTask_6 = Number(prompt('Write first num '));
    let numberSecondTask_6 = Number(prompt('Write second num '));

    function minMax(a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if (a % i == 0) {
                result += i;
            }
        };
        if (result == a) {
            console.log(`Perfect num ${a}`);
        }

    }
    for (let i = numberFirstTask_6; i <= numberSecondTask_6; i++) {
        minMax(i);
    };


}
task6();


function task7() {
    let hours = Number(prompt('Write hours '));
    let minutes = Number(prompt('Write minutes '));
    let seconds = Number(prompt('Write seconds'));

    hours = (!!hours) ? hours : '00';
    minutes = (!!minutes) ? minutes : '00';
    seconds = (!!seconds) ? seconds : '00';

    function taskSevSec(a, b, c) {
        console.log(`${a}:${b}:${c}`);
    }
    taskSevSec(hours, minutes, seconds);

}
task7();


function task8() {
    let hours = Number(prompt('Write hours '));
    let minutes = Number(prompt('Write minutes '));
    let seconds = Number(prompt('Write seconds'));

    hours = (!!hours) ? hours : '00';
    minutes = (!!minutes) ? minutes : '00';
    seconds = (!!seconds) ? seconds : '00';

    function taskSevSec(a, b, c) {
        console.log(`seconds: ${(((a * 60) + (b)) * 60) + (c)}`);
        return ((((a * 60) + (b)) * 60) + (c));
    }
    return taskSevSec(hours, minutes, seconds);

}
console.log(task8());


let seconds = Number(prompt("Seconds "));

seconds = (!!seconds) ? seconds : 0;

function concat(sum) {
    let ex = sum % 3600;
    let hours = (sum - ex) / 3600;
    let min = (ex - (ex % 60)) / 60;
    let sec = (ex % 60);

    console.log(`time: ${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} `);
}
concat(seconds);

function task10() {
    let a = task8();
    let b = task8();
    let c = (a > b) ? (a - b) : (b - a);
    concat(c);

}
task10();