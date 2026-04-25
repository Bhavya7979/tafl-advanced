function drawTable(table){

let container=document.getElementById("table");

let html="<table class='cyk-table'>";

for(let i=0;i<table.length;i++){

html+="<tr>";

for(let j=0;j<table[i].length;j++){

let value=table[i][j].join(", ");

html+=`<td class="cyk-cell">${value}</td>`;
}

html+="</tr>";
}

html+="</table>";

container.innerHTML=html;

animateCYK();
}

/* ---------- ANIMATION ---------- */

function animateCYK(){

let cells=document.querySelectorAll(".cyk-cell");

cells.forEach((cell,index)=>{

setTimeout(()=>{
cell.classList.add("filled");
},index*120);

});
}