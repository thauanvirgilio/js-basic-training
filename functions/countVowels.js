const word = "paralelepipedo";

function countVowels(wordToCount) {
    let vowels = "aeiou";
    let qtVowels = 0;
    const text = wordToCount.toLowerCase();

    for (let iLetter = 0; iLetter < text.length; iLetter++) {
        for (let iVowel = 0; iVowel < vowels.length; iVowel++) {
            console.log(text.length);
            if (text[iLetter] === vowels[iVowel]) {
                qtVowels++;
            }
        }
    }

    return qtVowels;
}

document.getElementById("text").innerHTML = countVowels(word);
