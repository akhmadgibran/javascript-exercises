const add = function (num1, num2) {
    // taking two number argument and perform their sum
    const result = num1 + num2;
    return result;
};

const subtract = function (num1, num2) {
    // taking two number argument and perform their substraction
    const result = num1 - num2;
    return result;
};

const sum = function (array) {
    // summ all value inside the array
    let result = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        result += array[i];
    }
    return result;
};

const multiply = function (array) {
    // multiply all the value inside the array
    let result = array[0];
    // console.log("here is the array :", array);
    for (let i = 1; i <= array.length - 1; i++) {
        // console.log("position :", i);
        result *= array[i];
    }
    return result;
};

const power = function (base, exponent) {
    // using arithmethic exponenttiation
    const result = base ** exponent;
    return result;
};

const factorial = function (num) {
    // given 1 value number and count the faktorial
    if (num === 0) {
        return 1;
    }
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        // console.log("position :", i);
        result *= i;
        // console.log("current result :", result);
    }
    return result;
};

// let test = factorial(5);
// console.log(test);

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
