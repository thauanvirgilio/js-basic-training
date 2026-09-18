const values = [2000, 269, 10000, 931, 15067, 4009];

function findLargestValue(value) {
    let largestValue = 0;

    for (let i = 0; i < value.length; i++) {
        console.log(value[i]);
        if (value[i] > largestValue) {
            largestValue = value[i];
        }

    }

    return largestValue;
}

// arrow
const findLargestValue = value => {
    let largestValue = 0;

    for (let i = 0; i < value.length; i++) {
        console.log(value[i]);
        if (value[i] > largestValue) {
            largestValue = value[i];
        }

    }

    return largestValue;
}

document.getElementById("text").innerHTML = findLargestValue(values);

// alternative version with object
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

let biggestProduct;
let biggestPrice = 0;

for (let i = 0; i < products.length; i++) {
    let product = products[i]
    if (product.price > biggestPrice) {
        biggestPrice = product.price
        biggestProduct = product.name
    }
}

console.log(biggestProduct)
console.log(biggestPrice)
