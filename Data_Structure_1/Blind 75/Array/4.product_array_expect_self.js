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
  const n = nums.length;
  const result = new Array(n).fill(1);

  // 1️⃣ prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;      // product of everything to the left of i
    prefix *= nums[i];
  }

  // 2️⃣ suffix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;     // multiply by product of everything to the right
    suffix *= nums[i];
  }

  return result;
}

const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));