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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    let hour = s.slice(0, 2);
    let timeIndicate = s.slice(- 2);
    let doubleZero = "00";
    let timeFormated = 0;
    
    if(hour == 12 && timeIndicate === "AM") {
        timeFormated = `${doubleZero}${s.slice(2, s.length -2)}`;
        
    }else {
        
        if(hour < 12 && timeIndicate === "PM") {
            timeFormated = `${Number(12 + parseInt(hour))}${s.slice(2, s.length - 2)}`;
        }else {
            timeFormated = s.slice(0, s.length - 2);
        }
    }
    
    return timeFormated;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
