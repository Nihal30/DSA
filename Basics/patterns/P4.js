class Solution {
    pattern6(n) {
        for (let i = 0 ; i < n ; i++ ){
            for(let j = 0; j< n-i ;j++){
                process.stdout.write((j+1).toString());

            }
            console.log()
        }



    }
}

const N = 5

const Sol= new Solution()

Sol.pattern6(N)