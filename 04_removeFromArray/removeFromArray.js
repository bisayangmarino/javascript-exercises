const removeFromArray = function(...givenArray) {
    const array = givenArray[0];
    const modifiedArray = [];
    array.forEach((numbers) => {
    if (!givenArray.includes(numbers)) {
        modifiedArray.push(numbers);
        } 
    });
    return modifiedArray;
};

console.log(removeFromArray([1,2,3,4],1,3,4));
// Do not edit below this line
module.exports = removeFromArray;
