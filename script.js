const casas = document.querySelectorAll(".casa");

let jogador = "X";
let jogoAtivo = true;

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
    casa.addEventListener("click", jogar);
});

function jogar(event) {
    if (!jogoAtivo) return;

    const casa = event.target;

    if (casa.textContent !== "") return;

    casa.textContent = "X";

    if (verificarVitoria("X")) {
        alert("Você venceu! 🎉");
        jogoAtivo = false;
        return;
    }

    if (verificarEmpate()) {
        alert("Empate!");
        jogoAtivo = false;
        return;
    }

    setTimeout(jogadaRobo, 500);
}

function jogadaRobo() {
    if (!jogoAtivo) return;

    const livres = [];

    casas.forEach((casa, indice) => {
        if (casa.textContent === "") {
            livres.push(indice);
        }
    });

    if (livres.length === 0) return;

    const escolha = livres[Math.floor(Math.random() * livres.length)];

    casas[escolha].textContent = "O";

    if (verificarVitoria("O")) {
        alert("O robô venceu! 🤖");
        jogoAtivo = false;
        return;
    }

    if (verificarEmpate()) {
        alert("Empate!");
        jogoAtivo = false;
    }
}

function verificarVitoria(simbolo) {
    return combinacoesVitoria.some(combinacao => {
        return combinacao.every(indice =>
            casas[indice].textContent === simbolo
        );
    });
}

function verificarEmpate() {
    return [...casas].every(casa =>
        casa.textContent !== ""
    );
}
