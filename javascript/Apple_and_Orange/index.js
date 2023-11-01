'use strict';

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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
    let firstApple = 0;
    let secondApple = 0;
    let thirdApple = 0;
    
    let firstOrange = 0;
    let secondOrange = 0;
    
    let resultApple = 0;
    let resultOrange = 0;
    
    for(let i in apples) {
        
        if(i == 0) {
            firstApple = a + apples[i];
            
            if(firstApple >= s && firstApple <= t) {
                resultApple++;
            }
            
        }else if(i == 1) {
            secondApple = a + apples[i];
            
            if(secondApple >= s && secondApple <= t) {
                resultApple++;
            }
            
        }else {
            thirdApple = a + apples[i]
            
            if(thirdApple >= s && thirdApple <= t) {
                resultApple++;
            }
        }
    }
    
    for(let j in oranges) {
        
        if(j == 0) {
            firstOrange = b + oranges[j];
            
            if(firstOrange >= s && firstOrange <= t) {
                resultOrange++;
            }
            
        }else {
            secondOrange = b + oranges[j]
            
            if(secondOrange >= s && secondOrange <= t) {
                resultOrange++;
            }
        }
    }
    
    console.log(`${resultApple}\n${resultOrange}`);
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
