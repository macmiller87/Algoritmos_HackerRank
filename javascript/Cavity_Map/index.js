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
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here

    let splitArr = [...grid.map(str => str.split(''))];
    let result = [];
    
    for(let i = 1; i < grid.length - 1; i++) {
        
        for(let j = 1; j < grid.length - 1; j++) {
            
            let cell = grid[i][j];
        
            let directions = Object.values({
                left:  grid[i][j - 1] < cell,
                up:    grid[i - 1][j] < cell,
                right: grid[i][j + 1] < cell,
                down:  grid[i + 1][j] < cell
            });

            if(directions.every(Boolean)) {
                splitArr[i][j] = 'X';
            }
        }
    }
    
    for(let k in splitArr) {
       result.push(splitArr[k].join(''));
    }
    
    return result; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
