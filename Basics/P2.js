class Solution {

    pattern2(n){

        for(let i = 0 ; i<n ;i++){
            for(let j = 0 ; j <= i ; j++){
                process.stdout.write(j.toString())
            }
            // line break
            console.log()
        }

    }


}


const N = 5

const Sol= new Solution()

Sol.pattern2(N)