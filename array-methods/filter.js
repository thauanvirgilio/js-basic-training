
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// all actives filter with for
let allActivesList = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.active) {
        allActivesList.push(product.name);
    }
}

console.log(allActivesList);

// all actives with filter
const allActives = products.filter(function (product) {
    return product.active;
})

// arrow version
// const allActives = products.filter(product => product.active === true);
