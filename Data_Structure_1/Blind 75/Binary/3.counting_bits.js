/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

*/

function getCount(bit) {
  let count = 0;
  if (bit === 0) return 0;
  while (bit > 0) {
    count = count + (bit & 1);
    bit = bit >>> 1;
  }
  return count;
}

var countBits = function (n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    let count = getCount(i);
    ans.push(count);
  }
  return ans;
};

console.log(countBits(5));