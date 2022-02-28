const sumAll = function(fromNumber, toNumber) {
    //Create variable to store total sum
    let totalSum = 0;
    let x = fromNumber;
    let y = toNumber;
    //Display error :
    if ( typeof x != 'number' || typeof y != 'number') {
        return "ERROR";
    } else if (x < 0 || y < 0) {
        return "ERROR";
    //Does calculation:
    } else if (x < y) {
        for ( i = x; i <= y; i++) {
            totalSum += i;
        }
    } else {//When first parameter is larger than the second parameter
        for (i = y; i <= x; i++) {
            totalSum += i;
        }
    }
    return totalSum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
