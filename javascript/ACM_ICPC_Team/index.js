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
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    
    let arrayTopics = topic;
    
    let maxTopics = 0;
    let maxTeams = 0;
    
    for(let i = 0; i < arrayTopics.length; i++) {
        
        for(let j = i + 1; j < arrayTopics.length; j++) {
            
            let knowsTopic = 0;
            
            for(let k = 0; k < arrayTopics[i].length; k++) {
                
                if(arrayTopics[i][k] === '1' || arrayTopics[j][k] === '1') {
                    knowsTopic++;
                }
            }
            
            if(knowsTopic > maxTopics) {
                maxTopics = knowsTopic;
                maxTeams = 1;
                
            }else if(knowsTopic === maxTopics) {
                maxTeams++;    
            }
        }
    }

    let result = [maxTopics, maxTeams];
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
