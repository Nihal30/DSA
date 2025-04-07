// Assign Cookies

// Consider a scenario where a teacher wants to distribute cookies to students, with each student receiving at most one cookie.

// Given two arrays, Student and Cookie, the ith value in the Student array describes the
//  minimum size of cookie that the ith student can be assigned. 
// The jth value in the Cookie array represents the size of the jth cookie.
//  If Cookie[j] >= Student[i], the jth cookie can be assigned to the ith student. 
//  Maximize the number of students assigned with cookies and output the maximum number.

// Examples:
// Input : Student = [1, 2, 3] , Cookie = [1, 1]
// Output :1
// Explanation : You have 3 students and 2 cookies.
// The minimum size of cookies required for students are 1 , 2 ,3.
// You have 2 cookies both of size 1, So you can assign the cookie only to student having minimum cookie size 1.
// So your answer is 1.

// Solution using 2 Pointers 

class Solution {
    findMaximumCookieStudents(Student, Cookie) {
        let n = Student.length;
        let m = Cookie.length;
        // Pointers
        let l = 0, r = 0;
        // Sorting of arrays
        Student.sort((a, b) => a - b);
        Cookie.sort((a, b) => a - b);

        // Traverse through both arrays
        while (l < n && r < m) {
            /*If the current cookie can satisfy 
            the current student, move to the 
            next student*/
            if (Cookie[r] >= Student[l]) {
                l++;
            }
            // Move to next cookie
            r++;
        }
        // Return number of students
        return l; 
    }
}

// Example input
const Student = [1, 2];
const Cookie = [1, 2, 3];

// Create a Solution object
const solution = new Solution();

// Call the findMaximumCookieStudents function
const result = solution.findMaximumCookieStudents(Student, Cookie);

// Output the result
console.log("Number of students satisfied:", result);

