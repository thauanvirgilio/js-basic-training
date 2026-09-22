# Counting the vowels in a word
Function exercise that checks how many vowels a phrase has.

```js
const word = "abcdefghijklmnopqrstuvwxyz";

function countVowels(wordToCount) {
    let vowels = "aeiou";
    let qtVowels = 0;
    const text = wordToCount.toLowerCase();

    for (let iLetter = 0; iLetter < text.length; iLetter++) {
        for (let iVowel = 0; iVowel < vowels.length; iVowel++) { // a for inside another for, needed to compare each letter of the word with each existing vowel.
            if (text[iLetter] === vowels[iVowel]) {
                qtVowels++;
            }
        }
    }

    return qtVowels;
}
```
