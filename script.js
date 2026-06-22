let jogador = "X";

const casas = document.querySelectorAll(".casa");

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

casas.forEach(casa => {

    casa.addEventListener("click", () => {

        if(casa.innerHTML === ""){

            casa.innerHTML = jogador;

            if(verificarVitoria()){
                setTimeout(() => {
                    alert("Jogador " + jogador + " venceu!");
                }, 100);
                return;
            }

            if(verificarEmpate()){
                setTimeout(() => {
                    alert("Empate!");
                }, 100);
                return;
            }

            jogador = jogador === "X" ? "O" : "X";
        }

    });

});

function verificarVitoria(){

    return combinacoesVitoria.some(combinacao => {

        const [a,b,c] = combinacao;

        return (
            casas[a].innerHTML &&
            casas[a].innerHTML === casas[b].innerHTML &&
            casas[a].innerHTML === casas[c].innerHTML
        );

    });

}

function verificarEmpate(){

    return [...casas].every(casa => casa.innerHTML !== "");

}
