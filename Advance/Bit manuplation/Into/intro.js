

// String vonver to Binary in CPP

// string decimalToBinary(int n) {
//     result = ""
    
//     while(n != 1) {
//         if(n % 2 == 1) result += '1'
//         else result += '0'
        
//         n = n / 2
//     }
    
//     reverse(result)
//     return result
// }

// Time Complexity: O(logN) Since the number is divided by 2 continuously.
// Space Complexity: O(logN) Storing the bits.

// Binary to Decimal Conversion
// string binaryToDecimal(string str) {
//     len = str.length
//     val = 1, num = 0
    
//     for(i from len-1 to 0) {
//         if(str[i] == '1') {
//             num = num + val
//         }
        
//         val = val * 2
//     }
    
//     return num
// }


// Complexity Analysis:
// Time Complexity: O(n) Traversing every bit in the string.
// Space Complexity: O(1) Couple of variables used.
