var weight;
var height;
var bmi;
var classification;

weight = 81.00;
height = 1.80;

bmi = weight / (height * height);

console.log(bmi);

if (bmi <= 18.5) {
    classification = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Normal weight";
} else if (bmi >= 25 && bmi <= 29.9) {
    classification = "Overweight";
} else if (bmi >= 30) {
    classification = "Obese";
}

document.getElementById("text").innerHTML = classification;
