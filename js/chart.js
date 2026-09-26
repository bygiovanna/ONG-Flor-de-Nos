let instanciaGraficoImpacto = null;

function renderGraficoImpacto() {
    const canvas = document.getElementById("graficoImpacto");
    if (!canvas) return;

    if (instanciaGraficoImpacto) {
        instanciaGraficoImpacto.destroy();
    }

    // Lê as cores atuais do tema (claro ou escuro) para que os textos
    // do gráfico mantenham contraste adequado nos dois modos.
    const estilos = getComputedStyle(document.documentElement);
    const corDestaque = estilos.getPropertyValue("--cor-destaque").trim() || "#fa4eb8";
    const corTexto = estilos.getPropertyValue("--cor-texto-claro").trim() || "#666666";

    instanciaGraficoImpacto = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Doações", "Educação", "Comunidade", "Eventos"],
            datasets: [{
                label: "Pessoas impactadas",
                data: [120, 85, 60, 40],
                backgroundColor: corDestaque,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: corTexto } },
                y: { beginAtZero: true, ticks: { color: corTexto } }
            }
        }
    });
}

export { renderGraficoImpacto };