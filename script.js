
function iniciar() {
    document.getElementById("capa").style.display = "none";
    document.getElementById("historia").style.display = "block";
}const botoesVoltar = document.querySelectorAll(".botao-voltar");

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
        const destino = botao.getAttribute("data-voltar");

        document.querySelectorAll(".passo").forEach(passo => {
            passo.style.display = "none";
        });

        document.getElementById(destino).style.display = "block";
    });
});
