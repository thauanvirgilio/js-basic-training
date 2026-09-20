// basic variable assignment
var arr = ["a", "b", "c", "d"];
var [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);


// Separate allocation of the declaration
var licenseA, licenseB;
[licenseA, licenseB] = ["motorcycle drivers", "car driver"];

console.log(licenseA);
console.log(licenseB);


// default values
var a, b, c;
[a = "oi, ", b = "tudo", c = "bem?"] = ["olá, "];

console.log(a, b, c);


// Swapping variables
var a = "rain";
var b = "sun";
[a, b] = [b, a];

console.log(a);
console.log(b);