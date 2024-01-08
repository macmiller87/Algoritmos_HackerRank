'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    
    let lowerNumber = p;
    let upperNumber = q;
    
    let resultNums = [];
    
    for(let i = lowerNumber; i <= upperNumber; i++) {
        
        let numDigits = (i + "").length;
        let numberPow = Math.pow(i, 2);
        let lengthNumbersPow = numberPow.toString().length;
        
        let numberRigthPart = numberPow.toString().slice(- numDigits);
        let numberLeftPart = (lengthNumbersPow - numDigits) > 0 ? numberPow.toString().slice(0, lengthNumbersPow - numDigits): 0;
        
        let sumNumParts = parseInt(numberLeftPart) + parseInt(numberRigthPart);
        
        if(sumNumParts === i) {
            resultNums.push(i);
        }
    }
    
    let result = resultNums.length >= 1 ? resultNums.join(" ") : "INVALID RANGE";
    
    console.log(result);
}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
