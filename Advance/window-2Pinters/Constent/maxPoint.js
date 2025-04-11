// Maximum Points You Can Obtain from Cards

// Given N cards arranged in a row, each card has an associated score denoted by the cardScore array.
// Choose exactly k cards. In each step, a card can be chosen either from the beginning or the end of the row.
// The score is the sum of the scores of the chosen cards.

// Return the maximum score that can be obtained.

// Examples:
// Input : cardScore = [1, 2, 3, 4, 5, 6] , k = 3
// Output : 15
// Explanation : Choosing the rightmost cards will maximize your total score. 
// So optimal cards chosen are the rightmost three cards 4 , 5 , 6.
// Th score is 4 + 5 + 6 => 15.

class Solution {
    // Function to calculate the maximum
    // score after picking k cards
    maxScore(cardScore, k) {
        let lSum = 0, rSum = 0, maxSum = 0;

        // Calculate the initial sum of the first k cards
        for (let i = 0; i < k; i++) {
            lSum += cardScore[i];
            
            /* Initialize maxSum with the
            sum of the first k cards */
            maxSum = lSum;
        }

        // Initialize rightIndex to iterate array from last
        let rightIndex = cardScore.length - 1;
        
        for (let i = k - 1; i >= 0; i--) {
            
            // Remove the score of the ith card from left sum
            lSum -= cardScore[i];   
            
            /* Add the score of the card
            from the right to the right sum */
            rSum += cardScore[rightIndex];  
            
            // Move to the next card from the right
            rightIndex--; 

            // Update maxSum with the maximum sum found so far
            maxSum = Math.max(maxSum, lSum + rSum);
        }

        // Return the maximum score found
        return maxSum; 
    }
}

let nums = [1, 2, 3, 4, 5, 6];

// Create an instance of the Solution class
let sol = new Solution();

let result = sol.maxScore(nums, 3);

// Output the maximum score
console.log("The maximum score is:");
console.log(result);
