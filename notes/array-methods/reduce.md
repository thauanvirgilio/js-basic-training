# Summing all prices with an accumulator
I learned about reduce, and how to build the accumulated sum of all the values of a given array.

```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];
```

## sum of all prices with for
```js
let somResult = 0;

for (const product of products) {
    somResult = somResult + product.price
}
```

## sum of all prices with reduce
```js
const somOfPrices = products.reduce(function (accumulator, product) { // important to pay attention to the order of the parameters
    return accumulator + product.price;
}, 0);
```
