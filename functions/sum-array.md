# Summing the values of an array

```js
const numbers = [20, 35, 88, 143, 571];

function sumArray(valuesToSum) {
    let sumResult = 0;

    for (let i = 0; i < valuesToSum.length; i++) {
        sumResult = sumResult + valuesToSum[i];
    }

    return sumResult;
}

document.getElementById("text").innerHTML = sumArray(numbers);
```
