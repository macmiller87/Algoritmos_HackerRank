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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    
    let arrayResult = [];
    let gradeRounded = 0;
    
    for(let i in grades) {
        
        gradeRounded = Math.ceil(grades[i] / 5) * 5;
        
        if(grades[i] < 38 || gradeRounded - grades[i] > 2) {
            arrayResult.push(grades[i]);
            
        }else {
            arrayResult.push(gradeRounded);
        }
    }
    
    return arrayResult;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

     ws.write(result.join('\n') + '\n');

    ws.end();
}
