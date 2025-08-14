/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity; /*isdesez nums[0] da yazmaq olar */
    let sum = 0;
    for (let i = 0;i<nums.length;i++) {
        sum = Math.max(nums[i],sum + nums[i]);
        max = Math.max(max,sum);
    }
    return max;
};

// console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// -------------------------
// nums = [-2, 1, -3, 4]

// i=0:
// sum = Math.max(-2, 0 + -2) → -2  
// max = -2

// i=1:
// sum = Math.max(1, -2 + 1) → 1  
// max = 1

// i=2:
// sum = Math.max(-3, 1 + -3) → -2 
// max = 1

// i=3:
// sum = Math.max(4, -2 + 4) → 4 
// max = 4
