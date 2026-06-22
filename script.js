let jogador="X";

document.querySelectorAll(".casa").forEach(casa=>{

casa.addEventListener("click",()=>{

if(casa.innerHTML===""){
casa.innerHTML=jogador;

jogador=jogador==="X"?"O":"X";
}

});

});
