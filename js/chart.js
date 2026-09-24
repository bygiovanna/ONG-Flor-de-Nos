let instanciaGraficoImpacto = null;

function renderGraficoImpacto() {
    const canvas = document.getElementById("graficoImpacto");
    if (!canvas) return;

    if (instanciaGraficoImpacto) {
        instanciaGraficoImpacto.destroy();
    }

    instanciaGraficoImpacto = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Doações", "Educação", "Comunidade", "Eventos"],
            datasets: [{
                label: "Pessoas impactadas",
                data: [120, 85, 60, 40],
                backgroundColor: "#fa4eb8",
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
                y: { beginAtZero: true }
            }
        }
    });
}

export { renderGraficoImpacto };