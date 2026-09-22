# Reversing a string with a loop

```js
const word = "arara"

function reverseString(wordToReverse) {
    let reversedWord = "";

    for (let i = wordToReverse.length - 1; i > -1; i--) {
        reversedWord = reversedWord + wordToReverse[i];
    }

    return reversedWord;
}

document.getElementById("text").innerHTML = reverseString(word);
```
