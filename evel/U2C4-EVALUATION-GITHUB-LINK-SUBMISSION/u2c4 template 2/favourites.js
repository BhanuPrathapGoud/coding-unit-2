// write js code here corresponding to favourites.html

var arrdata = JSON.parse(localStorage.getItem("favourites"))





arrdata.forEach(function display(element,index){
    
   
    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.innerHTML= element.matchNum
    var td2 = document.createElement("td")
    td2.innerHTML= element.teamA
    var td3 = document.createElement("td")
    td3.innerHTML= element.teamB
    var td4 = document.createElement("td")
    td4.innerHTML= element.date
    var td5 = document.createElement("td")
    td5.innerHTML= element.venue
    var td6 = document.createElement("td")
    td6.innerHTML = "Add as Favourites"
    td6.style.color= "green"
    td6.addEventListener("click",function(){
        myfunction(element,index);
    })
    function myfunction(element,index){
        arrdata.splice(index,1)
        localStorage.setItem("favourites",JSON.stringify(arrdata));
        window.location.reload();
    }
   
    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr)
   
})