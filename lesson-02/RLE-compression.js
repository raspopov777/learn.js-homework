'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} inputString
 * @return {string} outputString
 */
function rle(inputString) {
    const inputStrLenght = inputString.length;

    if(!inputStrLenght) {
        return
    } else if (inputStrLenght === 1) {
        return inputString;
    }

    let accum = 0;
    let accumLetter = inputString[0];
    let outputString = '';
    let i = 1;

    for(i; i < inputString.length; i++) {
        if(inputString[i] === accumLetter) {
            accum += 1;
        } else {
            accum = 0;
            outputString += accumLetter + accum;
        }
    }

    return outputString;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));