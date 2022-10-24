function proceed(){
const btn2=document.createElement("button");
btn2.innerHTML="PROCEED";
document.getElementById("win").appendChild(btn2);
}

var btn1=document.getElementById("btn1");
btn1.addEventListener("click",changegreen1);
var btn2=document.getElementById("btn2");
btn2.addEventListener("click",changegreen2);
var btn3=document.getElementById("btn3");
btn3.addEventListener("click",changegreen3);
var btn4=document.getElementById("btn4");
btn4.addEventListener("click",changegreen4);
var btn5=document.getElementById("btn5");
btn5.addEventListener("click",changegreen5);
var btn6=document.getElementById("btn6");
btn6.addEventListener("click",changegreen6);
var btn7=document.getElementById("btn7");
btn7.addEventListener("click",changegreen7);
var btn8=document.getElementById("btn8");
btn8.addEventListener("click",changegreen8);

const VIP = "Ksh 5000"
const Regular="Ksh 1500"

function changegreen1(){
btn1.style.backgroundColor="green";
btn1.style.color="white";
selected();
}
function changegreen2(){
btn2.style.backgroundColor="green";
btn2.style.color="white";
selected1();
}
function changegreen3(){
btn3.style.backgroundColor="green";
btn3.style.color="white";
selected();
}
function changegreen4(){
btn4.style.backgroundColor="green";
btn4.style.color="white";
selected1();
}
function changegreen5(){
btn5.style.backgroundColor="green";
btn5.style.color="white";
selected();

}
function changegreen6(){
btn6.style.backgroundColor="green";
btn6.style.color="white";
selected1();
}
function changegreen7(){
btn7.style.backgroundColor="green";
btn7.style.color="white";
selected();

}
function changegreen8(){
btn8.style.backgroundColor="green";
btn8.style.color="white";
selected1();
}

function selected(){
var selection=document.createElement("p");
selection.innerHTML=VIP;
document.getElementById("slip").appendChild(selection);}

function selected1(){
var selection=document.createElement("p");
selection.innerHTML=Regular;
document.getElementById("slip").appendChild(selection);}


