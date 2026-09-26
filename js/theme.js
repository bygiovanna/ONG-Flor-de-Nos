const CHAVE_TEMA = "temaEscuro";

function aplicarTema(ativo, botaoDarkMode) {

    document.body.classList.toggle("dark-mode", ativo);

    if (botaoDarkMode) {
        botaoDarkMode.setAttribute("aria-pressed", String(ativo));
    }

}

function iniciarTema() {

    const botaoDarkMode = document.getElementById("btnDarkMode");

    if (!botaoDarkMode) return;

    let preferenciaSalva = null;
    try {
        preferenciaSalva = localStorage.getItem(CHAVE_TEMA);
    } catch (e) {
        preferenciaSalva = null;
    }

    aplicarTema(preferenciaSalva === "ativo", botaoDarkMode);

    botaoDarkMode.addEventListener("click", function () {

        const ativo = !document.body.classList.contains("dark-mode");

        aplicarTema(ativo, botaoDarkMode);

        try {
            localStorage.setItem(CHAVE_TEMA, ativo ? "ativo" : "inativo");
        } catch (e) {
            // LocalStorage indisponível (ex.: modo privado); o tema
            // continua funcionando normalmente nesta sessão.
        }

    });

}

export { iniciarTema };
