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
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

function stones(n, a, b) {
    // Write your code here

    let stones = n;
    let diferrence1 = a;
    let diferrence2 = b;
    
    let caseStone1 = [];
    let caseStone2 = [];
    
    let sumCases = [];
    
    for(let i = stones - 1; i >= 0; i--) {
        let sum = diferrence1 * i;
        caseStone1.push(sum);
    }
    
    for(let j = 0; j < stones; j++) {
        let sum = diferrence2 * j;
        caseStone2.push(sum);
    }
    
    let k = 0;
    
    while(k < stones) {
        sumCases.push(caseStone1[k] + caseStone2[k]);
        k++;
    }
    
    let result = [...new Set(sumCases)];
    
    return result.sort((items1, items2) => {
        return items1 - items2;
    });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const a = parseInt(readLine().trim(), 10);

        const b = parseInt(readLine().trim(), 10);

        const result = stones(n, a, b);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
