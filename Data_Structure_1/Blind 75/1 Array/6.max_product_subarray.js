/* 
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
*/


function getMaximumSubArrayProduct(nums) {
  let size = nums.length;
  let maxSum = -Infinity;
  let currentSum = 1;
  for (let start = 0; start < size; start++) {
    currentSum = currentSum * nums[start];
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 1;
    }
  }

  return maxSum;
}

let nums = [-2,0,-1]

let ans = getMaximumSubArrayProduct(nums);

console.log(ans);