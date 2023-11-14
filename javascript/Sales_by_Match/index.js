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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    
    let arraySocks = ar;
    
    let arrayRepeated = {};
    let count = 0;
    
    for(let i in arraySocks) {
        
        if(arraySocks[i] === arraySocks[i]) {
            arrayRepeated[arraySocks[i]] = (arrayRepeated[arraySocks[i]] || 0) + 1;        
        }
    }
    
    Object.values(arrayRepeated).filter((element) => {

        //element > 1 && element % 2 == 0 ? count += element / 2 :  count += (element - 1) / 2;
        
        if(element > 1 && element % 2 == 0) {
            count += element / 2;
        }else {
            count += (element - 1) / 2;
        }
    });
    
    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
