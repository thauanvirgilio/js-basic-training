// FizzBuzz exercise, checks if it is a multiple of 3 or 5

let number;
number = 15;

let result;

if (number % 3 == 0 && number % 5 == 0) {
    result = "FizzBuzz";
} else if (number % 3 == 0) {
    result = "Fizz";
} else if (number % 5 == 0) {
    result = "Buzz";
} else {
    result = number;
}


document.getElementById("text").innerHTML = result;
