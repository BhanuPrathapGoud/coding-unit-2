// write js code here corresponding to index.html
// You should add submit event on the form

var matchdata = JSON.parse(localStorage.getItem("schedule")) || [];
var form = document.querySelector("form");
form.addEventListener("submit",function (){
    event.preventDefault();
   data = {
    matchNum : form.matchNum.value,
    teamA : form.teamA.value,
    teamB : form.teamB.value,
    date : form.date.value,
    venue : form.venue.value,
   }
   matchdata.push(data);
   console.log(matchdata);
   localStorage.setItem("schedule",JSON.stringify(matchdata))
})