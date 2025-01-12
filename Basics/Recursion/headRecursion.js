
// Print the first n natural no 
function Num(n){
// base condition 
if(n<1) return
Num(n-1)
console.log('n', n)

}

Num(5) // 1,2,3,4,5