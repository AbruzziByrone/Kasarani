var unames=["byrone"];
var passwords=[];


function print(){

for (i in unames){
var uname=document.createElement("p");
uname.innerHTML=unames[i];
document.getElementById("win").appendChild(uname);}
}



var btn=document.getElementById("saka");
btn.addEventListener("click",create)

function create(){
var user=document.getElementById("jina").value;
var paswad=document.getElementById("passy").value;
let i=0;
if(user==localStorage.getItem("i")){prompt("Username already taken!"),window.location.href="login.html";
};

if(user!=localStorage.getItem("i")) {
localStorage.setItem("i",user);
localStorage.setItem("password",paswad);

console.log(localStorage.getItem("i"));
console.log(localStorage.getItem("password"));
window.location.href="login.html";

}}




