// Minimum days to make M bouquets
// Given n roses and an array nums where nums[i] denotes that the 'ith' rose will bloom on the nums[i]th day, 
// only adjacent bloomed roses can be picked to make a bouquet. Exactly k adjacent bloomed roses are required to make a single bouquet.
//  Find the minimum number of days required to make at least m bouquets, each containing k roses. Return -1 if it is not possible.

// Input: n = 8, nums = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3
// Output: 12
// Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. 
// So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

//  LS

Input: n = 8, nums = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3

Output: 12

Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.
