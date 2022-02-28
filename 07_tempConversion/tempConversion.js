const ftoc = function(input) {
  let answer = input - 32;
  answer *= 5 / 9;
  return Math.round(answer * 10) / 10;
};

const ctof = function(input) {
  let answer = input * 9 / 5 + 32;
  return Math.round(answer * 10) / 10;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
