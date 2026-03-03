const sumAll = function (start, end) {
    let sum = 0;

    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start)
        if (start < end) {
            for (let i = start; i <= end; i++) {
                // console.log("sum right now :", sum);
                // console.log("position:", i);
                sum += i;
                // console.log("plus: +", i);
            }
            return sum;
        } else if (start > end) {
            console.log("masuk");
            // example start = 123
            // start i = 123
            // run loop as long as 123 >= 1
            // run the loop to add 123 in the sum
            // 123 - 1
            // iterate with i = 122
            for (let i = start; i >= end; i--) {
                // console.log("posisi :", i);

                sum += i;
                // console.log("ditambah +", i);
                // console.log("hasilnya", sum);
            }
            return sum;
        } else {
            return "ERROR";
        }
};

// Do not edit below this line
module.exports = sumAll;
