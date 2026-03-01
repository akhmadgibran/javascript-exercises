const repeatString = function (string, num) {
    let word = string;
    let time = num;
    let fullString = "";

    if (time < 0) {
        return "ERROR";
    }

    for (let i = 0; i < time; i++) {
        fullString += word;
    }

    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
