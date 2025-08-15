/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/

var threeSum_BrutreForce = function (nums) {
  let result = new Set();
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(JSON.stringify(triplet));
        }
      }
    }
  }

  return Array.from(result).map(JSON.parse);
};

var threeSum_betterApproach = function (nums) {
  // eq -> a + b + c = 0
  // so -> a + b = -c

  let result = new Set();
  let size = nums.length;

  for (let i = 0; i < size - 2; i++) {
    let seen = new Set();
    for (let j = i + 1; j < size; j++) {
      const complete = -nums[i] - nums[j];
      if (seen.has(complete)) {
        let triplet = [nums[i], nums[j], complete].sort((a, b) => a - b);
        result.add(JSON.stringify(triplet));
      }
      seen.add(nums[j]);
    }
  }
  return Array.from(result).map(JSON.parse);
};

var threeSum_optimizeApproach = function (nums) {
  let n = nums.length;
  let result = new Set();

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        j++;
        k--;
      } else {
        if (sum > 0) k--;
        else j++;
      }
    }
  }
  return Array.from(result).map(JSON.parse);
};

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum_optimizeApproach(nums));

