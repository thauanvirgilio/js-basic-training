# Filtering the even numbers from an array
Exercise creating a function that checks which numbers are even.

```js
const numbers = [67, 11, 22, 13, 79, 48, 4, 88];

function filterEven(numbersToCheck) {
    let evenNumbers = [];

    for (let i = 0; i < numbersToCheck.length; i++){
        if (numbersToCheck[i] % 2 === 0){
            evenNumbers.push(numbersToCheck[i])
        }
    }

    return evenNumbers;
}
```
