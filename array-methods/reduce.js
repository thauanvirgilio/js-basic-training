
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// som of all prices with for
var somResult = 0;

for (const product of products) {
    somResult = somResult + product.price
}

document.getElementById("text").innerHTML = somResult;

// som of all prices with reduce
const somOfPrices = products.reduce(function (accumulator, product) {
    return accumulator + product.price;
}, 0);
