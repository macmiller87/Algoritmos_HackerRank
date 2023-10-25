'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    let biggerNumber = Math.max(...arr);
    let smallestNumber = Math.min(...arr);

    let sumMin = 0;
    let sumMax = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] < biggerNumber) {
            sumMin += arr[i];
        }

        if(arr[i] > smallestNumber) {
            sumMax += arr[i];
        }
        
        if(biggerNumber == smallestNumber) {
            sumMin = biggerNumber  * (arr.length - 1);
        }
        
        if(smallestNumber == biggerNumber) {
            sumMax = smallestNumber  * (arr.length - 1);
        }
    }

    console.log(`${sumMin} ${sumMax}`);

    // const smallestNumber = arr.reduce((prev, current) => {
    //     return prev < current ? prev : current;
    // });

    // const biggerNumber = arr.reduce((prev, current) => {
    //     return prev > current ? prev : current;
    // });

    // let sumMin = 0;
    // let sumMax = 0;

    // for(let j = 0; j < arr.length; j++) {

    //     if(arr[j] < biggerNumber) {
    //         sumMin += arr[j];
    //     }

    //     if(arr[j] > smallestNumber) {
    //         sumMax += arr[j];
    //     }
        
    //     if(biggerNumber == smallestNumber) {
    //         sumMin = biggerNumber  * (arr.length - 1);
    //     }
        
    //     if(smallestNumber == biggerNumber) {
    //         sumMax = smallestNumber  * (arr.length - 1);
    //     }
    // }

    // console.log(`${sumMin} ${sumMax}`);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
