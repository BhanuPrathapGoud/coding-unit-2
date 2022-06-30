// write js code here corresponding to matches.html


var arrdata = JSON.parse(localStorage.getItem("schedule"));

var favouritesdata = JSON.parse(localStorage.getItem("favourites")) || [];
matches(arrdata);
function filter(){
    var select = document.querySelector("#filterVenue").value;
    var filterlist = arrdata.filter(function(element){
        return element.venue == select;
    })
    console.log(filterlist)
    matches(filterlist);
}  


function matches(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function (element){
    
   
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
            myfunction(element);
        })
    
       
        tr.append(td1,td2,td3,td4,td5,td6)
    
        document.querySelector("tbody").append(tr)
       
    })
    function myfunction(element){
        favouritesdata.push(element)
        //console.log(favouritesdata)
       localStorage.setItem("favourites",JSON.stringify(favouritesdata))
    }
}

