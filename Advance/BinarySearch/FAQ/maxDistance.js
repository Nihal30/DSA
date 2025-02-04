// Minimise max distance to gas stations

// Given a sorted array arr of size n, containing positive integer positions of n gas stations on the X-axis,
//  and an integer k, place k new gas stations on the X-axis. The new gas stations can be placed anywhere on the 
//  non-negative side of the X-axis, including non-integer positions. Let dist be the maximum distance between adjacent
//   gas stations after adding the k new gas stations. Find the minimum value of dist.

// Input: n = 5, arr = [1, 2, 3, 4, 5], k = 4
// Output: 0.500000
// Explanation: One of the possible ways to place 4 gas stations is [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5}.
//      Thus the maximum difference between adjacent gas stations is 0.5. Hence, the value of dist is 0.5.
//       It can be shown that there is no possible way to add 4 gas stations in such a way that the value of dist is lower than this. 

// brute 
// class Solution {
//     /* Function to minimize the maximum
//     distance between gas stations */
//     minimiseMaxDistance(arr, k) {
//     const n = arr.length; 
    
//     /* Array to store how many gas 
//         stations are placed in each section*/
//     const howMany = new Array(n - 1).fill(0);

//     //Pick and place k gas stations
//     for (let gasStations = 1; gasStations <= k; gasStations++) {
//         let maxSection = -1;
//         let maxInd = -1;
        
//         /* Find the maximum section 
//         and insert the gas station*/
//         for (let i = 0; i < n - 1; i++) {
//             const diff = arr[i + 1] - arr[i];
            
//             /* Update the maximum section
//             length and its index */
//             const sectionLength = diff / (howMany[i] + 1);
//             if (sectionLength > maxSection) {
//                 maxSection = sectionLength;
//                 maxInd = i;
//             }
//         }
//         /* Insert the current gas 
//         station into the section */
//         howMany[maxInd]++;
//     }

//     //Find the maximum distance i.e. the answer
//     let maxAns = -1;
//     for (let i = 0; i < n - 1; i++) {
//         const diff = arr[i + 1] - arr[i];
//         const sectionLength = diff / (howMany[i] + 1);
//         maxAns = Math.max(maxAns, sectionLength);
//     }
//     return maxAns;
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// const k = 4;

// // Create an instance of the Solution class
// const sol = new Solution();

// // Call the minimiseMaxDistance method and print the result
// const ans = sol.minimiseMaxDistance(arr, k);
// console.log(`The answer is: ${ans}`);

// better using queue 

// class Solution {
//     /* Function to minimize the maximum
//        distance between gas stations */
//     minimiseMaxDistance(arr, k) {
//         const n = arr.length; // Size of array
        
//         /* Array to store how many gas 
//            stations are placed in each section */
//         const howMany = new Array(n - 1).fill(0); 
        
//         /* Min heap to store sections by
//            their current maximum distance */
//         const pq = []; 

//         /* Insert first n-1 elements into priority
//            queue with respective distance values */
//         for (let i = 0; i < n - 1; i++) {
//             pq.push([- (arr[i + 1] - arr[i]), i]);
//         }

//         for (let gasStations = 1; gasStations <= k; gasStations++) {
//             /* Find the maximum section 
//                and insert the gas station */
//             pq.sort((a, b) => b[0] - a[0]); 
            
//             // Get the section with maximum distance
//             const [negDist, secInd] = pq.pop(); 

//             // Insert current gas station into section
//             howMany[secInd]++;

//             /* Calculate the initial difference
//                between adjacent gas stations */
//             const inidiff = arr[secInd + 1] - arr[secInd];

//             /* Calculate the new section length 
//                after inserting another gas station */
//             const newSecLen = inidiff / (howMany[secInd] + 1);

//             /* Push the updated section 
//                back into the priority queue */
//             pq.push([-newSecLen, secInd]);
//         }

//         /* Return the maximum distance in
//         the top section of the heap*/
//         return -pq[0][0];
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// const k = 4;

// // Create an instance of the Solution class
// const sol = new Solution();

// // Call the minimiseMaxDistance method and print the result
// const ans = sol.minimiseMaxDistance(arr, k);
// console.log(`The answer is: ${ans}`);

// optimal

class Solution {
    /* Function to calculate the number of 
    gas stations required for given distance*/
    numberOfGasStationsRequired(dist, arr) {
        
        // Size of the array
        const n = arr.length;
        let cnt = 0;
        for (let i = 1; i < n; i++) {
            
            /* Calculate number of gas stations
            needed between two points*/
            const numberInBetween = Math.floor((arr[i] - arr[i - 1]) / dist);
            
            // Adjust if exact distance fits perfectly
            if ((arr[i] - arr[i - 1]) === dist * numberInBetween) {
                cnt += numberInBetween - 1;
            } else 
                cnt += numberInBetween;
        }
        return cnt;
    }

    /* Function to minimize the maximum 
    distance between gas stations*/
    minimiseMaxDistance(arr, k) {
        const n = arr.length; 
        let low = 0;
        let high = 0;

        /* Find the maximum distance between
        consecutive gas stations*/
        for (let i = 0; i < n - 1; i++) {
            high = Math.max(high, arr[i + 1] - arr[i]);
        }

        const diff = 1e-6;
        /* Apply Binary search to find the
        minimum possible maximum distance*/
        while (high - low > diff) {
            const mid = (low + high) / 2.0;
            const cnt = this.numberOfGasStationsRequired(mid, arr);

            /* Adjust the search range based on
            the number of gas stations required*/
            if (cnt > k) {
                low = mid;
            } else {
                high = mid;
            }
        }

        // Return smallest maximum distance found
        return high;
    }
}

const arr = [1, 2, 3, 4, 5];
const k = 4;

// Create an instance of the Solution class
const sol = new Solution();

// Call the minimiseMaxDistance method and print the result
const ans = sol.minimiseMaxDistance(arr, k);
console.log(`The answer is: ${ans}`);
