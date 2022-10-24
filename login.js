var lgn=document.getElementById("submit");
lgn.addEventListener("click",login);


function proceed(){
const btn2=document.createElement("p");
btn2.innerHTML="You have logged in successfully. proceed and book our top games this weekend!";
document.getElementById("window").appendChild(btn2);
window.location.href="national.html"

}

function login(){
var user1=document.getElementById("uname").value;
var pass1=document.getElementById("pass").value;
if(user1==localStorage.getItem("i")&& pass1==localStorage.getItem("password")){proceed()};
if(user1!=localStorage.getItem("i")){prompt("Try again")};
}
