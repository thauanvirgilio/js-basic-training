# Finding the largest of three values

```js
let a, b, c;

a = 1112;
b = 323;
c = 43211;

function checkLargestOfThree() {
    let result;

    if (a > b && a > c) {
        result = "A is the largest value!";
    } else if (b > c) {
        result = "B is the largest value!";
    } else {
        result = "C is the largest value!";
    }

    return result;
}

// not function, same result
let result
let num1
let num2
let num3

num1 = 100000
num2 = 50000
num3 = 300000

if (num1 >= num2 && num1 >= num3) {
    result = num1
} else if (num2 >= num3) {
    result = num2
} else {
    result = num3
}
```
