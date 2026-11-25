# Immutability with objects
I learned why assigning an object to another variable doesn't copy it, and how to use spread to make shallow and nested copies.

## reference problem
```js
// suppose I have an object
const product1 = {
    name: 'Fridge',
    type: 'Home appliance',
    brand: 'Philco',
    tag: 20
}

// suppose I have another object with the same characteristics as the first one
const product2 = product1
product2.tag = 33 // but I need to change one of its properties

console.log(product1); // in this case the property ends up being reassigned in the first object too
console.log(product2);

// this happens because product2 doesn't take a copy of product1
// both variables simply point to the same place in memory, so reassigning this way doesn't work
```

## shallow copy with spread
```js
// to avoid this, we use spread to make a shallow copy
const product1 = {
    name: 'Fridge',
    type: 'Home appliance',
    brand: 'Philco',
    tag: 20
}

const product2 = {...product1}
product2.tag = 33 // now we can finally reassign a property value without affecting the first object

console.log(product1);
console.log(product2);
```

## copying nested objects
```js
// there is a small problem in scenarios where we need to copy NON-PRIMITIVE types.
// copying the properties of an object when they are string, number or boolean is simpler, because we only need the spread.
// but we need to be careful when creating many places in memory (copying many objects), because it can cause performance problems,
// and that is exactly what we do when the copy isn't of PRIMITIVE TYPES but of an array of objects, for example.
// these copies of nested objects are called "deep copy". A shallow copy won't work in this case.

const product1 = {
    name: 'Fridge',
    type: 'Home appliance',
    brand: 'Philco',
    tag: 20,
    sellers: [
        { name: 'Mercado Livre', id: 44 },
    ]
}

// to copy a nested object, just follow the code below
const product2 = {
    ...product1,
    name: 'Microwave',
    // deep copy
    sellers: [
        ...product1.sellers,
        {
            name: 'Amazon',
            id: 10
        }
    ]
}

console.log(product1);
console.log(product2);
```
