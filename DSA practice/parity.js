var arr = [5,4,1,3,2];

// [-1,5,4,4,3];


// for(var i = 0 ; i < array.length ; i++){
    
//     max = -1;
   
//     let left = i-1;
//     let right = i+1;
//     if(left>=0 && array[left] > array[i] &&  array[right] > array[i] && right<array.length){
//        max =  Math.max(array[left],array[right])
//        console.log(max , "teo")
//     }
//     else if(array[left] > array[i] && left >= 0){
//         max = array[i-1]
       
//         console.log(max , "left")
//     }
//    else if(array[right] > array[i] && right < array.length){
//        max = array[right+1]
      
//        console.log(max, "rig")
//    }
//    else{
//       console.log(-1)
//    }
//    //}

   

// }


for (let i=0; i<arr.length; i++)
{
   
    for ( var j =i-1; j>=0; j--)
    {
        if (arr[j] > arr[i])
        {
            console.log(arr[j] + ", ");
            break;
        }
    }
    for ( var j =i; j < arr.length; j++)
    {
        if (arr[j] > arr[i])
        {
            console.log(arr[j] + ", ");
            break;
        }
    }
    if (j == -1)
      console.log("-1");
}