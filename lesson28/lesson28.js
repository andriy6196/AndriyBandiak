// ======================================
//                 TASK1
// ======================================
let car = {
    manufacturer: 'Renault',
    model: 'Koleos',
    yearOfIssue: 2019,
    averageSpeed: 100   //('km/hour')
}

function myCar() {
    let myCar =
        `manufacturer: ${car.manufacturer}
model: ${car.model} 
year: ${car.yearOfIssue} 
average speed: ${car.averageSpeed} km/hour `

    console.log(myCar);

};

myCar();

let transmitteDistance = Number(prompt('Write your distance in kilometers '));
function necessaryTime() {
    let kilometersRemaining = transmitteDistance % car.averageSpeed;
    let hours = (transmitteDistance - kilometersRemaining) / car.averageSpeed;
    let timesOut = (hours - (hours % 3)) / 3
    let minutes = Math.round(kilometersRemaining * 60 / car.averageSpeed);

    console.log(`${hours + timesOut} hours and ${minutes} minutes`);
}

necessaryTime();





// ======================================
//                 TASK2
// ======================================



// ======================================
//                 TASK3
// ======================================




