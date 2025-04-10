// Insert Interval

// Given a 2D array Intervals, where Intervals[i] = [start[i], end[i]] represents the start and end of the ith interval,
//  the array represents non-overlapping intervals sorted in ascending order by start[i]. 

// Given another array newInterval, where newInterval = [start, end] represents the start and end of another interval, 
// insert newInterval into Intervals such that Intervals remain non-overlapping and sorted in ascending order by start[i].

// Return Intervals after the insertion of newInterval.

// Examples:
// Input : Intervals = [ [1, 3] , [6, 9] ] , newInterval = [2, 5]
// Output : [ [1, 5] , [6, 9] ]
// Explanation : After inserting the newInterval the Intervals array becomes [ [1, 3] , [2, 5] , [6, 9] ].
// So to make them non overlapping we can merge the intervals [1, 3] and [2, 5].
// So the Intervals array is [ [1, 5] , [6, 9] ].

// solution

class Solution {
    // To insert new interval
        insertNewInterval(intervals, newInterval) {
            // Initialize array 
            let res = [];
            
            // Track index
            let i = 0;
            
            // Get total intervals
            let n = intervals.length;
            
            // Insert intervals before newInterval
            while (i < n && intervals[i][1] < newInterval[0]) {
                /* Add intervals to the result array
                until their end time is before
                the start time of newInterval */
                
                res.push(intervals[i]);
                // Move to next interval
                i++;
            }
            
            // Merge overlapping intervals
            while (i < n && intervals[i][0] <= newInterval[1]) {
                /* Update the start time of newInterval to the
                minimum of its current start time and the
                start time of the current interval */
                newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                
                /* Update the end time of newInterval to the
                maximum of its current end time and the
                end time of the current interval */
                newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
                
                // Move to the next interval
                i++;
            }
            
            /* Insert the merged interval
            Add the merged interval to 
            the result array */
            res.push(newInterval);
            
            /* Insert remaining 
            intervals after 
            newInterval */
            while (i < n) {
                /* Add the remaining intervals
                after newInterval to the result
                array */
                res.push(intervals[i]);
                
                // Move to next interval
                i++;
            }
            
            // Return result array
            return res;
        }
    }
    
    // Test the function
    let intervals = [[1, 2], [3, 4], [6, 7], [8, 10], [12, 16]];
    let newInterval = [5, 8];
    
    console.log("Intervals Array:", intervals);
    console.log("New Interval to be Inserted:", newInterval);
    
    let solution = new Solution();
    let result = solution.insertNewInterval(intervals, newInterval);
    console.log("Resulting Intervals after Insertion:", result);
    