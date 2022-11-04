/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(num, target) {
      result = [];
    
    arr = new Map();
    for (let i = 0; i < num.length; i++) {
        let difference = target - num[i];
        if (arr.has(difference)) {
            result[0] = i;
            result[1] = arr.get(difference);
            break;
        } else {
            arr.set(num[i], i);
        }
    }
    return result;
};
