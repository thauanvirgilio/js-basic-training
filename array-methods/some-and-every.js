const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// checks if something price is true in array with for
const exampleValue = 300;
let valuesGreater;
let isGreater = false

for (let i = 0; i < products.length; i++) {
    let product = products[i]

    if (product.price > exampleValue) {
        valuesGreater = product;
        isGreater = true
    }
}
// console.log(isGreater)


// checks all price is true in array with for
const valueLess = 6433
let allLess = true;

for (let i = 0; i < products.length; i++) {
    if (products[i].price > valueLess) {
        allLess = false
    }
}
// console.log(allLess)


// checks if something is true in array with some
const priceGreater1000 = products.some(product => product.price > 1000)
console.log(priceGreater1000)


// checks if all is true in array with every
const allPricesGreater10 = products.every(product => product.price > 10)
console.log(allPricesGreater10)