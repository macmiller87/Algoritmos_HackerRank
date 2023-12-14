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
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    
    let day1 = d1;
    let month1 = m1;
    let year1 = y1;
    
    let day2 = d2;
    let month2 = m2;
    let year2 = y2;
    
    let fine = 0;
    
    if(day1 <= day2 && month1 <= month2 && year1 === year2) {
        fine = 0;
        
    }else if(day1 > day2 && month1 === month2 && year1 === year2) {
        let diferenceDays = day1 - day2;
        fine = diferenceDays * 15;
        
    }else if(month1 > month2 && year1 === year2) {
        let diferenceMotnths = month1 - month2;
        fine = diferenceMotnths * 500;
        
    }else if(year1 <= year2) {
        fine = 0;
        
    }else {
        let diferenceYears = 10000;
        fine = diferenceYears;  
    }
    
    return fine;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d1 = parseInt(firstMultipleInput[0], 10);

    const m1 = parseInt(firstMultipleInput[1], 10);

    const y1 = parseInt(firstMultipleInput[2], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d2 = parseInt(secondMultipleInput[0], 10);

    const m2 = parseInt(secondMultipleInput[1], 10);

    const y2 = parseInt(secondMultipleInput[2], 10);

    const result = libraryFine(d1, m1, y1, d2, m2, y2);

    ws.write(result + '\n');

    ws.end();
}
