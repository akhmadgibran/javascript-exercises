// 1. kita sediakan tempat menerima value di dalam function
// 2. ambil panjang string yang diterima
// 3. buat perulangan mundur dari akhir ke awal menggunakan panjang string yang diterima
// sampai index 1 dari panjang string, lakukan perhitungan mundur dari panjang string
// gunakan posisi perhitungan mundur dari panjang string untuk mengambil value letter pada string yang diterima
// susun value tersebut pada sebuah string baru
// return value tersebut
// ! pastikan indeks mulai nya for loop adalah - 1 dari panjang, karena for mulai dari 0, jadi panjang huruf - 1 adalah versi index dari panjang huruf

const reverseString = function (string) {
    let inputString = string;
    let stringLength = string.length;
    console.log("panjang :", stringLength);
    let reversedString = "";

    for (i = stringLength - 1; i >= 0; i--) {
        console.log("posisi :", i);
        let currentLastLetter = inputString[i];
        reversedString += currentLastLetter;
        console.log(reversedString);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
