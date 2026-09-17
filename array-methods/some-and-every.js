const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// checks if something is true in array
const priceGreater1000 = products.some(product => product.price > 1000)
console.log(priceGreater1000)

// checks if all is true in array
const allPricesGreater1000 = products.every(product => product.price > 10)
console.log(allPricesGreater1000)