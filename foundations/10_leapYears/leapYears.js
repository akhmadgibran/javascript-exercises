// tahun kabisat
// apabila tahun bisa dibagi oleh 4 maka itu kabisat
// apabila habis dibagi 100 dia bukan kabisat, kecuali bisa dibagi oleh 400

const leapYears = function (year) {
    // declaring the condition
    const DivisibleByFour = year % 4 === 0;
    const Century = year % 100 === 0;
    const DivisibleByFourHundred = year % 400 === 0;

    if (DivisibleByFour && (!Century || DivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
