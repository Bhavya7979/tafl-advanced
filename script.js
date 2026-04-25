async function runParser(){

showLoading(true);
clearError();

let grammar=document.getElementById("grammar").value;
let string=document.getElementById("string").value;

try{

let response=await fetch("/analyze",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({grammar,string})

});

let data=await response.json();

showLoading(false);

if(data.error){
showError(data.error);
return;
}

document.getElementById("cnf").innerText=
JSON.stringify(data.cnf,null,2);

document.getElementById("result").innerHTML=
data.accepted
? "<span class='accept'>✅ Accepted</span>"
: "<span class='reject'>❌ Rejected</span>";

drawTable(data.table);

}catch(e){

showLoading(false);
showError("Backend not running");

}
}

/* ---------- DARK MODE ---------- */

function toggleDark(){
document.body.classList.toggle("dark");
}

/* ---------- EXAMPLE GRAMMAR ---------- */

function loadExample(){

document.getElementById("grammar").value=
`S -> AB | BC
A -> BA | a
B -> CC | b
C -> AB | a`;

document.getElementById("string").value="ba";
}

/* ---------- LOADING ---------- */

function showLoading(state){
document.getElementById("loading").style.display=
state ? "block":"none";
}

/* ---------- ERROR ---------- */

function showError(msg){
document.getElementById("error").innerText=msg;
}

function clearError(){
document.getElementById("error").innerText="";
}