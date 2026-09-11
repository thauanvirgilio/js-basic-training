
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

// all products with for
allNames = [];
for (i = 0; i < products.length; i++) {
    let product = products[i]
    allNames.push(product.name)
}

console.log(allNames)

// all products with map 
const allProductsNames = products.map(function (product) {
    return product.name;
})

//arrow version
// const allProductsNames = products.map(product => product.name);