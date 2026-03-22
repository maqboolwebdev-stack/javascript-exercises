const fibonacci = function(number) {
    let firstNumber = 0;
    let secondNumber = 1;
    for(let i = 2; i <= number; i++){
        let current = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = current;
    }
    return console.log(secondNumber);
    
};

fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
