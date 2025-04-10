// Non-overlapping Intervals

// Given an array of N intervals in the form of (start[i], end[i]), where start[i] is the starting point of the interval and end[i]
// is the ending point of the interval, return the minimum number of intervals that need to be removed to make the remaining intervals
// non-overlapping.


// Examples:
// Input : Intervals = [ [1, 2] , [2, 3] , [3, 4] ,[1, 3] ]
// Output : 1
// Explanation : You can remove the interval [1, 3] to make the remaining interval non overlapping.

//solution 

class Solution {
    // Comparator function to compare intervals based on their ending times
    static comp(a, b) {
        // Compare the ending times of the intervals
        return a[1] - b[1];
    }

    // Function to count the maximum number of non-overlapping intervals
    MaximumNonOverlappingIntervals(intervals) {
        // Sort the intervals based on their ending times
        intervals.sort(Solution.comp);

        // Get total number of intervals
        const n = intervals.length;

        // Initialize counter
        let cnt = 1;

        // Keep track of the ending time
        let lastEndTime = intervals[0][1];

        // Iterate through all intervals
        for (let i = 1; i < n; i++) {
            /* Check if the starting time of 
            the current interval is greater
            than or equal to the ending time of
             the last selected interval */
            if (intervals[i][0] >= lastEndTime) {
                // Increment counter
                cnt++;
                // Update the ending time
                lastEndTime = intervals[i][1];
            }
        }
        return n-cnt;
    }
}

// Example usage
const obj = new Solution();
const intervals = [[0, 5], [3, 4], [1, 2], [5, 9], [7, 9]];

intervals.forEach((interval, i) => {
    console.log(`Interval ${i + 1} Start: ${interval[0]} End: ${interval[1]}`);
});

const ans = obj.MaximumNonOverlappingIntervals(intervals);
console.log(`Maximum Non-Overlapping Intervals: ${ans}`);
