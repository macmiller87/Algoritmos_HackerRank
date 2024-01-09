'use strict';

const fs = require('fs');

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
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here

    let arrayNumbers = arr;
    let numberMatch = d;
    
    let count = 0;

    for(let i = 0; i < arrayNumbers.length; i++) {
        
        for(let j = 0; j < arrayNumbers.length; j++) {
            
            let check = arrayNumbers[j] - arrayNumbers[i];
            
            if(check === numberMatch) {
                
                for(let k = 0; k < arrayNumbers.length; k++) {
                    
                    let check2 = arrayNumbers[k] - arrayNumbers[j];
                
                    if(check2 === numberMatch) {
                        count++;
                    }
                }
            }
        }
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = beautifulTriplets(d, arr);

    ws.write(result + '\n');

    ws.end();
}
