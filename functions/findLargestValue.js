const values = [2000, 269, 10000, 931, 15067, 4009];

function findLargestValue(value) {
    let largestValue = 0;

    for (let i = 0; i < value.length; i++) {
        console.log(value[i]);
        if (value[i] > largestValue) {
            largestValue = value[i];
        }

    }

    return largestValue;
}

// arrow
const findLargestValue = value => {
    let largestValue = 0;

    for (let i = 0; i < value.length; i++) {
        console.log(value[i]);
        if (value[i] > largestValue) {
            largestValue = value[i];
        }

    }

    return largestValue;
}

document.getElementById("text").innerHTML = findLargestValue(values);


