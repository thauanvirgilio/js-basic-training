# Destructuring arrays, objects and function parameters
I learned to use destructuring split into 3 parts: by arrays, objects and functions.

## basic variable assignment
```js
var arr = ["a", "b", "c", "d"];
var [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);
```

## separate allocation of the declaration
```js
var licenseA, licenseB;
[licenseA, licenseB] = ["motorcycle drivers", "car driver"];

console.log(licenseA);
console.log(licenseB);
```

## default values
```js
var a, b, c;
[a = "hello, ", b = "are you", c = "ok?"] = ["Hi, "];

console.log(a, b, c);
```

## swapping variables
```js
var a = "rain";
var b = "sun";
[a, b] = [b, a];

console.log(a);
console.log(b);
```

## array returned by function
```js
function f(){
    return [1, 2, 3];
}

var a, b, c;
[a, b] = f();
// ignoring values
// [a,  , c] = f()
console.log(a);
console.log(b);
console.log(c);
```

## destructuring object
```js
var product = { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' };

var {id, name} = product;

console.log(id);
console.log(name);
```

## array objects
```js
const products = [
    { id: 1, name: 'Keyboard', price: 250, active: true, category: 'pereferic' },
    { id: 2, name: 'Monitor', price: 1200, active: false, category: 'video' },
    { id: 3, name: 'Mouse', price: 90, active: true, category: 'pereferic' },
];

var [{id, name, ...rest}] = products;

console.log(id);
console.log(name);
console.log(rest); //{price: 250, active: true, category: 'pereferic'}
```

## destructuring with function
```js
const product =
{
    id: 1,
    name: 'Keyboard',
    price: 250,
    active: true,
    category: 'pereferic'
};

function getValidProducts({id, name, price}) {
    console.log(id, name, price);
}

getValidProducts(product);
```
