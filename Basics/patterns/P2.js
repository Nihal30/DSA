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

// cpp eg 

// #include <bits/stdc++.h>
// using namespace std;

// class Solution {
//     public:

//     static void pattern2(int n){
//         for (int i = 0 ; i <n ; i++){
//             for (int j = 0 ;j<= i ,j++){
//                 cout<<'*',
//             }
//          cout << endl;
//         }
//     }
// }
// int main() {
//     int N = 5;
    
//     //Create an instance of Solution class
//     Solution sol;
    
//     sol.pattern2(N);
// }