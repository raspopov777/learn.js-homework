'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} inputString
 * @return {string} outputString
 */
function rle(inputString) {
    const inputStrLength = inputString.length;

    if(!inputStrLength) {
        return;
    } else if (inputStrLength === 1) {
        return inputString;
    }

    let accum = 1;
    let accumLetter = inputString[0];
    let outputString = '';
    let i = 1;

    for(i; i <= inputString.length; i++) {
        if(inputString[i] === accumLetter) {
            accum += 1;
        } else {
            outputString += (accum === 1) ? accumLetter : accumLetter + accum;
            accumLetter = inputString[i];
            accum = 1;
        }
    }

    return outputString;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
