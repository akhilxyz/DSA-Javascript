/**
 * @param {string} s
 * @return {number}
 */

 const symbolVal = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
    }
    
 
var romanToInt = function(s) {
    
    let result = 0
    for(let i = s.length - 1  ; i >= 0; i--){
        console.log(s.charAt(i))
        if(symbolVal[s[i]] < symbolVal[s[i + 1]]) {
            result = result - symbolVal[s[i]]
        } else {
            result = result + symbolVal[s[i]]
        } 
    }
    return result
    
};
