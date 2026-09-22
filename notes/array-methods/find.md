# Searching for a product by id
I learned to do a simple search that again goes through a for loop, looks for which index matches the condition and returns the result.

```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];
```

## search product by id with for
```js
let searchResult
for (let i = 0; i < products.length; i++) {
    if (products[i].id === 2) {
        searchResult = products[i].name;
    }
}
```

## search product by id with find
```js
const searchById = products.find(product => product.id === 2);
```
