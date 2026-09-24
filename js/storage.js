function salvarNoLocalStorage(dados) {
    let historico = [];
    const raw = localStorage.getItem("cadastros");
    if (raw) {
        try {
            historico = JSON.parse(raw);
        } catch (e) {
            historico = [];
        }
    }
    historico.push(dados);
    localStorage.setItem("cadastros", JSON.stringify(historico));
}

export { salvarNoLocalStorage };