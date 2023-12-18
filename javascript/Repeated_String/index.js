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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here

    let stringRepeat = s;
    let numberCharacters = n;
    
    let count = 0;
    
    if(numberCharacters >= stringRepeat.length) {
        
        for(let i in stringRepeat) {
            
            if(stringRepeat[i] === 'a') {
                count++;
            }
        }
        
        count *= Math.floor(numberCharacters / stringRepeat.length);
    }
    
    let mod = numberCharacters % stringRepeat.length;
    
    for(let i = 0; i < mod; i++) {
        
        if(stringRepeat[i] === 'a') {
            count++;
        }
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
