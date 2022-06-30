function sortedsqure(array){
    var newarray = new Array(array.length).fill(0);
    for(var i =0;i<array.length;i++){
        newarray[i] = Math.pow(array[i],2);        
    }
    newarray.sort(function(a,b){
        return a-b;
    })
    return newarray
}
var a = [1,2,5,3,10,4]

console.log(sortedsqure(a));
console.log("shas")