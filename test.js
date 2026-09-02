
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];


const allProductsNames = products.map(product => product.name)

// const allProductsNames = products.map(function (product) {
//     return product.name
// })

console.log(allProductsNames);



const allActives = products.filter(product => product.active === true);

// const allActives = products.filter(function (product){
//     return product.active === true;
// })

console.log(allActives)