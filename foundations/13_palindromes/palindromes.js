const palindromes = function (text) {
    const palindromes = text.toLowerCase().split('').reverse().join('');
    return palindromes == text ? true : false;
};

console.log(palindromes('race'));
console.log(palindromes('1racecar1'));
console.log(palindromes('maria'));
console.log(palindromes('1wdcdw1'));

// Do not edit below this line
module.exports = palindromes;
