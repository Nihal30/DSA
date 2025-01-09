// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Eg -
// Input : str = ["flowers" , "flow" , "fly", "flight" ]
// Output : "fl"
// Explanation : All strings given in array contains common prefix "fl". 

function longestCommonPrefix(strs) {
    // Base case: If the array is empty, return an empty string
    if (strs.length === 0) return "";

    // Sort the array to bring lexicographically smallest and largest strings to the ends
    strs.sort();

    // Get the first and last strings after sorting
    let first = strs[0];
    let last = strs[strs.length - 1];

    // Initialize the common prefix length
    let i = 0;

    // Compare characters of the first and last strings
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    // Return the substring of the first string up to the common prefix length
    return first.substring(0, i);
}

// Example Test Cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"
console.log(longestCommonPrefix([]));                          // Output: ""
console.log(longestCommonPrefix(["single"]));                  // Output: "single"
