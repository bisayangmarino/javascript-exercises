const stringContent= "hey";
function getNumber () {
    let randomNumber = Math.floor(Math.random()*3);
    return randomNumber;
}
const repeatString = function(string, number) {
if (string === "") {
    return "";
} else if (number === 0) {
    return "";
} else if (number < 0){
    return "ERROR";
} else {
    return stringContent.repeat(number);
}
};
repeatString(stringContent, 3);
repeatString(stringContent, 10);
repeatString(stringContent, 0);
repeatString(stringContent, -1);
repeatString(stringContent, getNumber());
console.log(repeatString("", 10));
// Do not edit below this line
module.exports = repeatString;
