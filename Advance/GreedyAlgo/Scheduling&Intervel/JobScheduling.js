// Job sequencing Problem

// Given an 2D array Jobs of size Nx3, where Jobs[i][0] represents JobID , Jobs[i][1] represents Deadline , 
// Jobs[i][2] represents Profit associated with that job. Each Job takes 1 unit of time to complete and only one 
// job can be scheduled at a time.
// The profit associated with a job is earned only if it is completed by its deadline. Find the number of jobs and maximum profit.

// Examples:
// Input : Jobs = [ [1, 4, 20] , [2, 1, 10] , [3, 1, 40] , [4, 1, 30] ]
// Output : 2 60
// Explanation : Job with JobID 3 can be performed at time t=1 giving a profit of 40.
// Job with JobID 1 can be performed at time t=2 giving a profit of 20.
// No more jobs can be scheduled, So total Profit = 40 + 20 => 60.
// Total number of jobs completed are two, JobID 1, JobID 3.

// Solution

class Solution {
    // Function to calculate maximum profit
    JobScheduling(Jobs) {
        // Sort jobs based on profit in descending order
        Jobs.sort((a, b) => b[2] - a[2]);

        // Total number of jobs
        const n = Jobs.length;

        /*Initialize a hash table 
        to store selected jobs.
        each element represents a 
        deadline slot, 
        initially unoccupied.*/
        const hash = Array(n).fill(-1);

        // Initialize count
        let cnt = 0;

        // Initialize the total profit earned
        let totalProfit = 0;

        // Iterate over each job
        for (let i = 0; i < n; i++) {
            /*Iterate over each deadline slot starting 
            from the job's deadline*/
            for (let j = Jobs[i][1] - 1; j >= 0; j--) {
                /*If the current deadline 
                slot is available 
                (not occupied)*/
                if (hash[j] === -1) {
                    // Count of selected jobs
                    cnt++;
                    // Mark the job as selected
                    hash[j] = Jobs[i][0];
                    // Update the total profit
                    totalProfit += Jobs[i][2];
                    // Move to the next job
                    break;
                }
            }
        }

        // Return the array
        return [cnt,totalProfit];
    }
}

// Example usage
const jobs = [[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]];

const solution = new Solution();
const result = solution.JobScheduling(jobs);

// Output the result
console.log("Number of Jobs: " + result[1]);
console.log("Maximum Profit: " + result[0]);
