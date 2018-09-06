'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} inputStr
 * @return {string} outputStr
 */
function rle(inputStr) {
    const inputStrLength = inputStr.length;

    if(!inputStrLength) {
        return;
    } else if (inputStrLength === 1) {
        return inputStr;
    }

    let accumCount = 1;
    let accumLetter = inputStr[0];
    let outputStr = '';
    let i = 1;

    for(; i <= inputStrLength; i++) {
        if(inputStr[i] === accumLetter) {
            accumCount += 1;
        } else {
            outputStr += (accumCount === 1) ? accumLetter : accumLetter + accumCount;
            accumLetter = inputStr[i];
            accumCount = 1;
        }
    }

    return outputStr;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
