'use strict';

const fs = require('fs');

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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Write your code here

    let arrayWordsAlphabetics = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'k', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let arrayNumbers = h;
    let stringWord = word;

    let arrayNumbersFiltered = [];
    let maxNumber = 0;
    let result = 0;

    for(let i in arrayNumbers) {
        
        for(let j in arrayWordsAlphabetics) {
            
            for(let k in stringWord) {
                
                if(stringWord[k] === arrayWordsAlphabetics[j] && i === j) {
                    arrayNumbersFiltered.push(arrayNumbers[j]);
                    maxNumber = Math.max(...arrayNumbersFiltered);
                    result = maxNumber * stringWord.length;
                }
            }
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
