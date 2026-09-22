# Filtering an array of objects by a condition
I learned to build a filter using the same base: I go through the array of objects and create a condition that returns only the items matching it.

```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];
```

## for
```js
let allActivesList = [];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.active) {
        allActivesList.push(product.name);
    }
}
```

## filter
```js
const allActives = products.filter(function (product) {
    return product.active;
})

// arrow version
const allActives = products.filter(product => product.active === true);
```
