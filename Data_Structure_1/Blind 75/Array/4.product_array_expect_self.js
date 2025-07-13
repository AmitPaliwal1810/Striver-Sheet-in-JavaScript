/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
*/

function productExceptSelf(nums) {
  let size = nums.length;
  let resultArray = new Array(size).fill(1);

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < size; i++) {
    resultArray[i] = prefix;
    prefix = prefix * nums[i];
  }

  for (let i = size - 1; i >= 0; i--) {
    resultArray[i] = resultArray[i] * suffix;
    suffix = suffix * nums[i];
  }

  return resultArray;
}

const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
