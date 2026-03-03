const removeFromArray = function (arrayInput, ...args) {
    // new array
    const newArray = [];

    arrayInput.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
