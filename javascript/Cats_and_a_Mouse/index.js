'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    
    let catA = x;
    let catB = y;
    let mouse = z;
    
    let distanceCatAFromMouse = Math.abs(catA - mouse);
    let distanceCatBFromMouse = Math.abs(catB - mouse);
    
    let calcBetwenCatAEndCatB = (distanceCatAFromMouse - distanceCatBFromMouse);
    let calcBetwenCatBEndCatA = (distanceCatBFromMouse - distanceCatAFromMouse);
    
    let result = ((calcBetwenCatAEndCatB < calcBetwenCatBEndCatA)) ? 'Cat A' : ((calcBetwenCatBEndCatA < calcBetwenCatAEndCatB)) ? 'Cat B' : 'Mouse C';
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const xyz = readLine().split(' ');

        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = catAndMouse(x, y, z);

        ws.write(result + "\n");
    }

    ws.end();
}
