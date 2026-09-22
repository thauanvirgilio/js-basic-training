# Building FizzBuzz from 1 to 100 with a function

```js
function fizzBuzz() {
    const numbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.push("FizzBuzz");
        } else if (i % 3 === 0) {
            numbers.push("Fizz");
        } else if (i % 5 === 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(i);
        }
    }

    return numbers;
}
```
