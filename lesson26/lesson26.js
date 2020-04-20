// // ======================================
// //                 TASK1
// // ======================================

// let car = {
//     manufacturer: 'Renault',
//     model: 'Koleos',
//     yearOfIssue: 2019,
//     averageSpeed: 100   //('km/hour')
// }

// function myCar() {
//     let myCar =
//         `manufacturer: ${car.manufacturer}
// model: ${car.model} 
// year: ${car.yearOfIssue} 
// average speed: ${car.averageSpeed} km/hour `

//     console.log(myCar);

// };

// myCar();

// let transmitteDistance = Number(prompt('Write your distance in kilometers '));
// function necessaryTime() {
//     let kilometersRemaining = transmitteDistance % car.averageSpeed;
//     let hours = (transmitteDistance - kilometersRemaining) / car.averageSpeed;
//     let timesOut = (hours - (hours % 4)) / 4
//     let minutes = Math.round(kilometersRemaining * 60 / car.averageSpeed);

//     console.log(`${hours + timesOut} hours and ${minutes} minutes`);
// }

// necessaryTime();


// ======================================
//                 TASK2
// ======================================


obj1 = {
    numb1: Number(prompt('Drop first: Num first numenator')),
    numb2: Number(prompt('Drop first: Num second denominator')),
}

obj2 = {
    numb1: Number(prompt('Drop second: Num first numenator')),
    numb2: Number(prompt('Drop second: Num second denominator')),
}

let convertOperation = prompt("Enter digit to add:[1],subtraction: [2],multiplication: [3], share: [4]");
switch (convertOperation) {
    case "1":
        add();
        break;
    case "2":
        subtraction();
        break;
    case "3":
        multiplication();
        break;
    case "4":
        share();
        break;
    default:
        console.log("not one of this")
        break;
};

function add() {
    let x = (obj1.numb1 / obj1.numb2) + (obj2.numb1 / obj2.numb2);
    console.log(`${obj1.numb1} / ${obj1.numb2} + ${obj2.numb1} / ${obj2.numb2} = ${obj1.numb1 * obj2.numb2 + obj2.numb1 * obj1.numb2} / ${obj1.numb2 * obj2.numb2} `);
}



function share() {
    let x = (obj1.numb1 / obj1.numb2) / (obj2.numb1 / obj2.numb2);
    console.log(`${obj1.numb1} / ${obj1.numb2} / ${obj2.numb1} / ${obj2.numb2} = ${obj1.numb1 * obj2.numb2} / ${obj1.numb2 * obj2.numb1}`);
}



function multiplication() {
    let x = (obj1.numb1 / obj1.numb2) * (obj2.numb1 / obj2.numb2);
    console.log(`${obj1.numb1} / ${obj1.numb2} / ${obj2.numb1} / ${obj2.numb2} = ${obj1.numb1 * obj2.numb1} / ${obj1.numb2 * obj2.numb2}`);
}



function subtraction() {
    let x = (obj1.numb1 / obj1.numb2) - (obj2.numb1 / obj2.numb2);
    console.log(`${obj1.numb1} / ${obj1.numb2} - ${obj2.numb1} / ${obj2.numb2} = ${obj1.numb1 * obj2.numb2 - obj2.numb1 * obj1.numb2} / ${obj1.numb2 * obj2.numb2} `);
}

function commonFactor() {
    let firstNumber = Number(prompt(`First num `));
    let secondNumber = Number(prompt(`Second num `));
    firstNumber = obj1.numb1;
    secondNumber = obj1.numb2;
    while (firstNumber != secondNumber) {
        if (firstNumber > secondNumber)
            firstNumber = firstNumber - secondNumber
        else
            secondNumber = secondNumber - firstNumber;
    }
    return firstNumber;
}

let commonFactor = commonFactor();

function commonFactorTwo() {
    let firstNumber = Number(prompt(`First num `));
    let secondNumber = Number(prompt(`Second num `));
    firstNumber = obj2.numb1;
    secondNumber = obj2.numb2;
    while (firstNumber != secondNumber) {
        if (firstNumber > secondNumber)
            firstNumber = firstNumber - secondNumber
        else
            secondNumber = secondNumber - firstNumber;
    }
    return firstNumber;
}


let commonFactorTwo = commonFactorTwo();


// // ======================================
// //                 TASK3
// // ======================================


// let myDate = new Date();
// ojk3 = {
//     hours: myDate.getHours(),
//     minutes: myDate.getMinutes(),
//     sec: myDate.getSeconds()
// }


// function time1() {
//     console.log(ojk3);
// }
// time1();


// function time2() {
//     let inputSeconds = Number(prompt(`Seconds`));
//     let result = ojk3.sec + inputSeconds;
//     myDate.setSeconds(result);
//     console.log(myDate);
// }
// time2();

// function time3() {
//     let inputMinutes = Number(prompt(`Minutes`));
//     let result = ojk3.minutes + inputMinutes;
//     myDate.setMinutes(result);
//     console.log(myDate);
// }
// time3();

// function time4() {
//     let inputHours = Number(prompt(`Hours`));
//     let result = ojk3.hours + inputHours;
//     myDate.setHours(result);
//     console.log(myDate);
// }
// time4();

