// N meetings in one room
// Given one meeting room and N meetings represented by two arrays, start and end, where start[i]
//  represents the start time of the ith meeting and end[i] represents the end time of the ith meeting,
//   determine the maximum number of meetings that can be accommodated in the meeting room if only one meeting can be held at a time.

// Examples:
// Input : Start = [1, 3, 0, 5, 8, 5] , End = [2, 4, 6, 7, 9, 9]
// Output : 4
// Explanation : The meetings that can be accommodated in meeting room are (1,2) , (3,4) , (5,7) , (8,9).

class Solution {
    // Comparator function to sort meetings based on end times
    static comparator(a, b) {
        // Sort by end time in ascending order
        return a[1] - b[1];
    }

    // Function to find the maximum number of meetings that can be held
    maxMeetings(start, end) {
        const n = start.length;
        // Array to store meetings
        const meetings = [];
        
        // Fill the meetings array with start and end times
        for (let i = 0; i < n; i++) {
            meetings.push([start[i], end[i]]);
        }

        // Sort the meetings based on the custom comparator
        meetings.sort(Solution.comparator);

        // The end time of last selected meeting
        let limit = meetings[0][1];
        // Initialize count
        let count = 1;

        /*Iterate through the meetings 
        to select the maximum number 
        of non-overlapping meetings*/
        for (let i = 1; i < n; i++) {
            /*If the current meeting starts 
            after the last selected meeting ends*/
            if (meetings[i][0] > limit) {
                /*Update the limit to the end 
                time of the current meeting*/
                limit = meetings[i][1];
                // Increment count
                count++;
            }
        }

        // Return count
        return count;
    }
}

// Example usage
const obj = new Solution();
// Start and end times of the meetings
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
// Get the maximum number of meetings that can be held
const maxMeetings = obj.maxMeetings(start, end);
// Output the maximum number of meetings
console.log("Maximum number of meetings:", maxMeetings);

// Complexity Analysis
// Time Complexity: O(N+N logN) where 𝑁 is the size of the start and end arrays. 
// The O(N) term accounts for filling the meetings array with start and end times. 
// The O(NlogN) term arises from sorting the meetings based on their end times.
//  After sorting, the function iterates through the sorted meetings in O(N) time to 
//  count the maximum number of non-overlapping meetings.
// Space Complexity: O(N) since we used an additional data structure for storing the start time and end time.
