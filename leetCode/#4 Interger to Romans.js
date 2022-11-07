let roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const romanToInt = (num) => {
if(num > 1000) {
    return 'please enter input between 1 to 1000'
}
let str = '';
for (let i of Object.keys(roman)) {
  var q = Math.floor(num / roman[i]);
  num -= q * roman[i];
  str += i.repeat(q);
}
return str
}

console.log(romanToInt(number))