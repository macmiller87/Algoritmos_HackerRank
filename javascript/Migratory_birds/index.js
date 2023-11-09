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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    
    let arrayNumbersResult = {};
    
    arr.map((curr, indexMap, arrayMap) => {
        arrayNumbersResult[curr] = (arrayNumbersResult[curr] || 0) + 1;
    });   
    
    let maxValue = Math.max(...Object.values(arrayNumbersResult));
                
    let result = Object.keys(arrayNumbersResult).find((key) => {
        return arrayNumbersResult[key] === maxValue;
    });

    return result;

    // let arrayNumbersResult = {};
    // let result = 0; 

    // arr.map((curr, indexMap, arrayMap) => {

    //     arr.forEach((curr, indexForEach, arrayForEach) => {

    //          if((indexMap == indexForEach) && (arrayMap[indexMap] == arrayForEach[indexForEach])) {
    //             arrayNumbersResult[curr] = (arrayNumbersResult[curr] || 0) + 1;
                
    //             let maxValue = Math.max(...Object.values(arrayNumbersResult));
                
    //             result = Object.keys(arrayNumbersResult).find((key) => {
    //                 return arrayNumbersResult[key] === maxValue;
    //             });
    //         }
            
    //     });
    // });   

    // return result;

    // let arrayNumbersResult = [];
    // let result = 0;

    // for(let i in arr) {
        
    //     for(let j in arr) {
            
    //         if((i > j) && (arr[i] == arr[j])) {
    //             arrayNumbersResult.push(arr[i]);
    //             arrayNumbersResult.sort();
    //         }
    //     }
    // }

    // arrayNumbersResult.forEach((curr) => {
    //     let count =  arr.filter((number) => number === curr).length;
        
    //     if(count > result) {
    //         result = curr;
    //     }
    // });
    
    // return result;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
