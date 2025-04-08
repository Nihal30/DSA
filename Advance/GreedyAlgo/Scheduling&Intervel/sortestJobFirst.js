// Shortest Job First

// A software engineer is tasked with using the shortest job first (SJF) policy to calculate the average waiting time for each process.
// The shortest job first also known as shortest job next (SJN) 
// scheduling policy selects the waiting process with the least execution time to run next.

// Given an array of n integers representing the burst times of processes, 
// determine the average waiting time for all processes and return the closest whole number that is less than or equal to the result.

// Examples:
// Input : bt = [4, 1, 3, 7, 2]
// Output : 4
// Explanation : The total waiting time is 20.
// So the average waiting time will be 20/5 => 4.

// Shortest Job First Algo 
class Solution {
    /* Function to calculate total waiting 
       time using Shortest Job First algorithm */
    solve(bt) {
        // Sort jobs in ascending order
        bt.sort((a, b) => a - b);

        // Initialize total waiting time
        let waitTime = 0;
        // Initialize total time taken
        let totalTime = 0;
        // Get number of jobs
        let n = bt.length;

        // Iterate to calculate waiting time
        for (let i = 0; i < n; ++i) {
            waitTime += totalTime;
            totalTime += bt[i];
        }

        // Return average waiting time
      return Math.floor(waitTime / n);
    }
}

// Example usage
const jobs = [1, 2, 3, 4];

console.log("Array Representing Job Durations: " + jobs.join(" "));

const solution = new Solution();
const ans = solution.solve(jobs);
console.log("Total waiting time: " + ans);

// Complexity Analysis
// Time Complexity: O(N logN + N) where N is the length of the jobs array.
// The code first sorts the job durations, which takes O(N logN) time. After sorting, 
// it iterates through the job durations to calculate the total waiting time, which takes O(N) time.
// Space Complexity: O(1) no extra space used.
