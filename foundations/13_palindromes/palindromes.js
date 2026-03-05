const palindromes = function (string) {
    let originalString = string;
    let newString = "";

    // try to rewrite the string backward
    // 1 try to know the string length
    // 2 try to determind the starting point
    // 3 count the loop backward from length value
    // 4 try to push into new string the value of the current position (backward)
    for (let i = originalString.length - 1; i >= 0; i--) {
        newString += originalString[i];
    }

    // try cleaning the original and the new string
    // The regex replaces any character that is NOT a letter or a number with an empty string
    let cleanOriginalString = originalString.replace(/[^a-z0-9]/gi, "");
    let cleanNewString = newString.replace(/[^a-z0-9]/gi, "");
    let lowerCaseCleanOriginalString = cleanOriginalString.toLowerCase();
    let lowerCaseCleanNewString = cleanNewString.toLowerCase();

    //     after done, we check if the original and the new string have same value string, if yes it is palindromes
    if (lowerCaseCleanOriginalString === lowerCaseCleanNewString) {
        console.log("true karena hasilnya :");
        console.log("original : ", lowerCaseCleanOriginalString);
        console.log("new : ", lowerCaseCleanNewString);
        return true;
    } else {
        console.log("false karena hasilnya :");
        console.log("original : ", lowerCaseCleanOriginalString);
        console.log("new : ", lowerCaseCleanNewString);
        return false;
    }
};

let test = palindromes("A car, a man, a maraca.");
console.log(test);

// Do not edit below this line
module.exports = palindromes;
