class Solution {
    Odd(arr,n){
        let OddSum = 0;
        for (let i = 0 ;i<n ; i++){
            if (arr[i] %2 !== 0){
                OddSum = OddSum+1;
            }
        }
        return OddSum;

    }
}

const sol = new Solution ();
const arr = [1,2,3,4,5] ; // 3 odd no
const n = arr.length;
console.log('Odd No Count :- ',sol.Odd(arr,n)) // op = 3