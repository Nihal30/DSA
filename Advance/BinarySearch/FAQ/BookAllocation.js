// Book Allocation Problem
// Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book,
//  and an integer m representing the number of students, allocate all the books to the students so that 
//  each student gets at least one book, each book is allocated to only one student, and the allocation is contiguous.

// Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized.
//  If the allocation of books is not possible, return -1.

// Input: nums = [12, 34, 67, 90], m=2
// Output: 113
// Explanation: The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

class Solution {
    /* Function to count the number of 
    students required given the maximum 
    pages each student can read */
    countStudents(nums, pages) {
        // Size of array
        let n = nums.length;
        
        let students = 1;
        let pagesStudent = 0;
        
        for (let i = 0; i < n; i++) {
            if (pagesStudent + nums[i] <= pages) {
                // Add pages to current student
                pagesStudent += nums[i];
            } else {
                // Add pages to next student
                students++;
                pagesStudent = nums[i];
            }
        }
        return students;
    }

    /* Function to allocate the book to ‘m’ 
    students such that the maximum number 
    of pages assigned to a student is minimum */
    findPages(nums, m) {
        // Size of array
        let n = nums.length;
        
        // Book allocation impossible
        if (m > n) return -1;

        let low = Math.max(...nums);
        let high = nums.reduce((a, b) => a + b, 0);

        // Linear search for minimum maximum pages
        for (let pages = low; pages <= high; pages++) {
            if (this.countStudents(nums, pages) === m) {
                return pages;
            }
        }
        return low;
    }
}

function main() {
    let nums = [25, 46, 28, 49, 24];
    let m = 4;

    // Create an instance of the Solution class
    let sol = new Solution();

    let ans = sol.findPages(nums, m);

    // Output the result
    console.log("The answer is:", ans);
}

// Call the main function
main();

class Solution {
    /* Function to count the number of 
    students required given the maximum 
    pages each student can read */
    countStudents(nums, pages) {
        // Size of array
        let n = nums.length;
        
        let students = 1;
        let pagesStudent = 0;
        
        for (let i = 0; i < n; i++) {
            if (pagesStudent + nums[i] <= pages) {
                // Add pages to current student
                pagesStudent += nums[i];
            } else {
                // Add pages to next student
                students++;
                pagesStudent = nums[i];
            }
        }
        return students;
    }

    /* Function to allocate the book to ‘m’ 
    students such that the maximum number 
    of pages assigned to a student is minimum */
    findPages(nums, m) {
        // Size of array
        let n = nums.length;
        
        // Book allocation impossible
        if (m > n) return -1;

        let low = Math.max(...nums);
        let high = nums.reduce((a, b) => a + b, 0);

        // Binary search for minimum maximum pages
        while (low <= high) {
            var mid = Math.floor((low + high) / 2);
            var students = this.countStudents(nums, mid);
            if (students > m) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return low;
    }
}

function main() {
    let nums = [25, 46, 28, 49, 24];
    let m = 4;

    // Create an instance of the Solution class
    let sol = new Solution();

    let ans = sol.findPages(nums, m);

    // Output the result
    console.log("The answer is:", ans);
}

// Call the main function
main();

