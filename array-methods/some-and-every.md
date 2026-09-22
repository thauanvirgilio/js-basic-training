# Checking if one or all items match a condition
I learned to check in an array whether one condition is true or whether all of them are. Always following the base of for with the if condition. And also using the short method.

```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];
```

## checks if something price is true in array with for
```js
const exampleValue = 300;
let valuesGreater;
let isGreater = false;

for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if (product.price > exampleValue) {
        valuesGreater = product;
        isGreater = true
    }
}
```

## checks all price is true in array with for
```js
const valueLess = 6433
let allLess = true;

for (let i = 0; i < products.length; i++) {
    if (products[i].price > valueLess) {
        allLess = false
    }
}
```

## checks if something is true in array with some
```js
const priceGreater1000 = products.some(product => product.price > 1000)
```

## checks if all is true in array with every
```js
const allPricesGreater10 = products.every(product => product.price > 10)
```
