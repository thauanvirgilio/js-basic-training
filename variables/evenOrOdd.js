var evenOrOdd;

evenOrOdd = 11;
let result;

if (evenOrOdd % 2 == 0) {
    result = "The number is even!"
} else {
    result = "The number is odd!"
}

document.getElementById("text").innerHTML = result
