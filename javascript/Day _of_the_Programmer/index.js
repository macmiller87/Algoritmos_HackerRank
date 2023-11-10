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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    
    let countAmountMonthsTillSeptember = (31 * 5) + (30 * 2);
    let september = '09';
    
    let february = 0;
    let day = 0;
    let dayOfProgrammer = 0;
    
    if(year === 1700 || year === 1800 || year === 1900) {

        february = 29;
        day = 256 - (countAmountMonthsTillSeptember + february);
        dayOfProgrammer = `${day}.${september}.${year}`;
        
    }else if((year === 1918) && (year % 100 !== 0)) {
        
        february = 15;
        day = 256 - (countAmountMonthsTillSeptember + february);
        dayOfProgrammer = `${day}.${september}.${year}`;
        
    }else if((year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)) {
        
        february = 29;
        day = 256 - (countAmountMonthsTillSeptember + february);
        dayOfProgrammer = `${day}.${september}.${year}`;
        
    }else {

        february = 28;
        day = 256 - (countAmountMonthsTillSeptember + february);
        dayOfProgrammer = `${day}.${september}.${year}`;
    }
    
    return dayOfProgrammer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
