
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];


// all products filter
// const allProductsNames = products.map(product => product.name);

const allProductsNames = products.map(function (product) {
    return product.name;
})

// console.log(allProductsNames);


// all actives filter
// const allActives = products.filter(product => product.active === true);

const allActives = products.filter(function (product) {
    return product.active === true;
})

// console.log(allActives);


// biggest value filter
value = 0;
for (const product of products) {
    if (product.price > value) {
        value = product.price
    }
}

// with map (return index by index)
// const biggestValue = products.map(function (product) {
//     if (product.price > value){
//         value = product.price
//     }
//     return value
// })

document.getElementById("text").innerHTML = value;