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
    somResult = somResult + product.price;
}
```

## sum of all prices with reduce
```js
const somOfPrices = products.reduce(function (accumulator, product) { // important to pay attention to the order of the parameters
    return accumulator + product.price;
}, 0);
```

## Group by category

Turns a flat list into an object where each category is a key holding its products.

**Dynamic keys.** `object[product.category]` uses the variable's *value* as the key
name. No category is hardcoded — they come from the data. Same idea as `array[i]`,
but with a string instead of a number.

**Why the `if` is required.** `object[key] = []` doesn't mean "make sure an array
exists", it means "put a new array here, discarding whatever was there". Without the
`if`, the third iteration (second `pereferic`) would wipe out the array holding
Keyboard. The `if` lets creation happen only on a category's first appearance. The
`push` stays **outside** the `if` — every product gets stored.

Unlike previous accumulators (`0` to sum, `[]` to collect), this one starts as `{}`
and grows its structure during the loop.

### reduce version

Same logic: `accumulator` is what `groupByCategory` was, the trailing `{}` is the
initial value, and `return accumulator` is required because each iteration receives
the previous one's return.

**Takeaway:** the `for` loop reads better here and `reduce` saved almost nothing.
`reduce` pays off with simple accumulators (sum, count) or in
`filter().map().reduce()` chains. For building an object with an `if` inside, the
loop wins.

```js
let groupByCategory = {};

for (const product of products) {
    if (groupByCategory[product.category] === undefined){
        groupByCategory[product.category] = [];
    }

    groupByCategory[product.category].push(product.name);
}

console.log(groupByCategory);

const filterByCategory = products.reduce(function(accumulator, product){
    if (accumulator[product.category] === undefined){
        accumulator[product.category] = [];
    }

    accumulator[product.category].push(product.name);
    return accumulator;
}, {});

console.log(filterByCategory);
```
