import { renderInicio, renderProjetos, renderCadastro } from "./renders.js";

function roteador() {
    const rota = window.location.hash;

    if (
        rota === "#projetos" ||
        rota === "#doacoes"  ||
        rota === "#educacao" ||
        rota === "#comunidade" ||
        rota === "#eventos"
    ) {
        renderProjetos();

        if (rota !== "#projetos") {
            setTimeout(function () {
                const secao = document.querySelector(rota);
                if (secao) {
                    secao.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        }

    } else if (rota === "#cadastro") {
        renderCadastro();

    } else {
        renderInicio();
    }
}

export { roteador };