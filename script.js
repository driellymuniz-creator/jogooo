let jogadorAtual = "X";

const casas = document.querySelectorAll(".casa");

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

casas.forEach(casa => {
    casa.addEventListener("click", jogar);
});

function jogar(event) {
    const casa = event.target;

    if (casa.textContent !== "") return;

    casa.textContent = jogadorAtual;

    if (verificarVitoria()) {
        alert(`Jogador ${jogadorAtual} venceu!`);
        return;
    }

    if (verificarEmpate()) {
        alert("Empate!");
        return;
    }

    trocarJogador();
}

function trocarJogador() {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificarVitoria() {
    return combinacoesVitoria.some(([a, b, c]) => {
        return (
            casas[a].textContent &&
            casas[a].textContent === casas[b].textContent &&
            casas[a].textContent === casas[c].textContent
        );
    });
}

function verificarEmpate() {
    return [...casas].every(casa => casa.textContent !== "");
}
