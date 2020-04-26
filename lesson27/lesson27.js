// ======================================
//                 TASK1
// ======================================

let pronto = {
    name: 'eggs',
    price: 30,
    number: 10,
    buy: true
};

let ArrOne = [{
    name: 'eggs',
    price: 30,
    number: 10,
    buy: true
}, {
    name: 'cheese',
    price: 70,
    number: 5,
    buy: false
}, {
    name: 'milk',
    price: 50,
    number: 7,
    buy: true

}, {
    name: 'fruit',
    price: 87,
    number: 3,
    buy: false
}]


// -------------------------------------------------------------------------------------------------------------
// 1.Display the entire list in such a way that first comes the non-purchased products, and then the purchased:
// -------------------------------------------------------------------------------------------------------------

function conclusion(x) {
    let noBuy = x.slice().sort(function (a, b) {
        if (a.buy > b.buy) return 1;
        else if (a.buy < b.buy) return -1;
    });
    return noBuy;
}

console.log(conclusion(ArrOne));

// ---------------------------------
//  2.Adding a purchase to the list:
// ---------------------------------


function addToByList(obj, fruits) {
    let result = false;
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i].name == obj.name) {
            fruits[i].buy = true;
            fruits[i].price += obj.price;
            result = true;
        }
    }
    if (result == false) {
        fruits.push(obj);
        conclusion(fruits);
    }
};

addToByList(pronto, ArrOne);

// -----------------------------------------------------------------------------------------
// 3.Product purchase. The function takes the name of the product and marks it as purchased:
// -----------------------------------------------------------------------------------------


function buyProduct(productName, arr) {
    arr.find(function (product) {
        if (product.name === productName) {
            product.buy = true;
            return product
        }
    }
    )
}
let product = prompt('Write product')
buyProduct(product, ArrOne);


// ======================================
//                 TASK2
// ======================================

let CheckStore = [{
    name: 'bread',
    price: 13.5,
    quantity: 2
}, {
    name: 'kefir',
    price: 21.49,
    quantity: 1
}, {
    name: 'milk',
    price: 18,
    quantity: 5
}, {
    name: 'buckwheat',
    price: 35,
    quantity: 3
}]

console.log(CheckStore);


// ----------------------------------------
//  1.Printout of the receipt on the screen:
// ----------------------------------------

function showShopChek(array) {
    array.forEach(element => console.log(element));
}
showShopChek(CheckStore);

// -------------------------
//  2.Total purchase count:
// -------------------------

function totalPurchase(array) {

    let arraySum = array.reduce((sum, current) => {
        current = current.quantity * current.price;
        return sum + current
    }, 0)

    return arraySum;

}
console.log(`Total purchase count: ${totalPurchase(CheckStore)}`);

// ---------------------------------------------
//  3.Getting the most expensive check purchase:
// ---------------------------------------------

function getBiggestPrice(array) {
    array.sort((a, b) => a.price - b.price);
    return array[array.length - 1];
}
console.log(`The most expensive check purchase: ${getBiggestPrice(CheckStore)}`);

// -----------------------------------------------------------
//  4.Calculation of the average cost of one item in a check:
// -----------------------------------------------------------

function calcAverageCost(array) {
    let calcAverageCostTwo = totalPurchase(CheckStore) / array.length;
    return calcAverageCostTwo;
}
// console.log(`Average cost of one item per check: ${calcAverageCost(CheckStore)}`); //NOT WORKING



// ======================================
//                 TASK3
// ======================================

















// ======================================
//                 TASK4
// ======================================
