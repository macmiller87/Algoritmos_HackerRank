'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    let sumZero = 0;
    let sumNegative = 0;
    let sumPositive = 0;

    for(let i in arr) {

        if(arr[i] == 0) {
            sumZero++;
        }

        if(arr[i] < 0) {
            sumNegative++;
        }
        
        if(arr[i] > 0) {
            sumPositive++;
        }
    }
    
    let fractionZero = 0;
    let fractionNegative = 0;
    let fractionPositive = 0;
    
    fractionZero = sumZero / arr.length;
    fractionNegative = sumNegative / arr.length;
    fractionPositive = sumPositive / arr.length;
    
    let result;
    
    result = `${fractionPositive.toFixed(6)} \n ${fractionNegative.toFixed(6)} \n ${fractionZero.toFixed(6)}`;
    
    console.log(result);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
