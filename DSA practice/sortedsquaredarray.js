function sortedsquarearray(array){
    const newarray = new Array(array.length).fill(0);
    let leftpointer = 0;
    let rightpointer = array.length-1

    for(var i = array.length-1 ; i >=0  ; i--){
        const leftsquared = Math.pow(array[leftpointer],2);
        const rightsquared = Math.pow(array[rightpointer],2);
        if(leftsquared > rightsquared){
            newarray[i] = leftsquared;
            leftpointer++;
        }
        else{
            newarray[i]=rightsquared;
            rightpointer--;
        }
    }
    return newarray;
}

var a = [-1,-3,2,5,6];
console.log(sortedsquarearray(a))