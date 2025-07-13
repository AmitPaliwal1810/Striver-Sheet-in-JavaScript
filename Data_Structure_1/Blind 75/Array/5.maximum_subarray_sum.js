/*
* Kadane's Algorithm, maximum subarray sum

Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

*/

// ! BRUTE FORCE

function getMaximumSubArraySum(nums) {
  let size = nums.length;
  let maxSum = 0;

  for (let start = 0; start < size; start++) {
    let currentSum = 0;

    for (let end = start; end < size; end++) {
      currentSum = currentSum + nums[end];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let ans = getMaximumSubArraySum(nums);

console.log(ans);

// ! optimize solution - Kadane's alogorithm

function getMaximumSubArraySum2(nums) {
  let size = nums.length;
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let start = 0; start < size; start++) {
    currentSum = currentSum + nums[start];
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

let ans2 = getMaximumSubArraySum2(nums);

console.log(ans2);
