/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const num = x
    
    if(x < 0) {
        return false
    } 
    
    var digit, result = 0

      while( x ){
            digit = x % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
            result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
            x = x/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
        }  
    
    if(result === num) {
        return true
    } else {
        return false
    }
};
