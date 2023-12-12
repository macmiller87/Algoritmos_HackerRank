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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here

    let firstString = s;
    let desiredString = t;
    let numberOperation = k;
    
    let count = 0;
    let result = '';
    
    for(let i in firstString) {
        
        if((firstString.length + desiredString.length) <= numberOperation) {
            return 'Yes';   
        }
        
        if(firstString[i] === desiredString[i]) {
            count++;   
            
        }else {
            break
        }
    }
    
    let check = (firstString.length - count) + (desiredString.length - count) - numberOperation;
    
    let check2 = (firstString.length - count) + (desiredString.length - count);
    
    result = check2 > numberOperation ? 'No' : check === numberOperation || check % 2 === 0 ? 'Yes' : 'No';
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
