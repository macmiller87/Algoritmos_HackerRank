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
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    
    let arrayHurdles = height;
    let jump = k;
    
    let result = 0;
    //let num = 0;
    
    let maxNumber = Math.max(... arrayHurdles); 
        
    result = jump > maxNumber ? 0 : Math.abs(jump - maxNumber);
        
    return result;
    
    // arrayHurdles.map((number) => {
        
    //     if(number > num) {
    //         num = number;
    //     }
        
    //     result = jump > num ? 0 : Math.abs(jump - num);
    // });
    
    // return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const height = readLine().replace(/\s+$/g, '').split(' ').map(heightTemp => parseInt(heightTemp, 10));

    const result = hurdleRace(k, height);

    ws.write(result + '\n');

    ws.end();
}
