
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// search product by id with for
let searchId
for (let i = 0; i < products.length; i++) {
    if (products[i].id === 2) {
        searchId = products[i].name
    }
}

console.log(searchId)

// search product by id with find
const searchById = products.find(product => product.id === 2)
