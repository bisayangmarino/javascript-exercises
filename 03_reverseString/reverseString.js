const reverseString = function(string) {
    const input = [];
    const length= string.length;
    for (let i = length; i >= 0; i--) {
        input.push(string[i]);
    } return input.join("");
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
