const array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
]
// console.log(array)
let left = 0;
let right = array[0].length-1;
let top = 0;
let bottom = array.length-1;

count = 0;
var arr = "";
var n = array.length * array[0].length

 while(n > count){
    for(let i = top ; i <= bottom && n > count  ; i++){
       console.log(array[i][right])
       count++
    }
    right--;
    for(let i = right ; i >= left && n > count ; i--){
        console.log(array[bottom][i]);
        count++
    }
    bottom--;
    for(let i = bottom ; i >= top && n > count ; i--){
        console.log(array[i][left])
        count++
    }
    left++;
    for(let i = left ; i <= right && n > count; i++){
        console.log(array[top][i])
        count++
   }
   top++;
   
 }