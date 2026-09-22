# Mapping an array of objects into a new array
I learned a way to map the indexes of an array of objects both with for (more manual) and with map; in both ways I check each index of the array and build a condition inside the mapping.

```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];
```

## all products with for
```js
let allNames = [];
for (i = 0; i < products.length; i++) {
    let product = products[i];
    allNames.push(product.name);
}

```
## all products with map
```js
const allProductsNames = products.map(function (product) {
    return product.name;
})

// arrow version
const allProductsNames = products.map(product => product.name);
```

## other examples
In these examples I mapped the products with the price 10% higher or lower.

```js
const tenPercentOff = products.map(function(product){
    let discont = product.price * 0.10;
    return product.price - discont;
})

const tenMostExpensive = products.map(function(product){
    let increase = product.price * 0.10;
    return product.price + increase;
})
```
