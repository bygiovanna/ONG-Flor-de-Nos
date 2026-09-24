import { salvarNoLocalStorage } from "./storage.js";

function configurarFormulario() {

    const form        = document.getElementById("formCadastro");
    const campoNome   = document.getElementById("nome");
    const campoEmail  = document.getElementById("email");
    const campoNasc   = document.getElementById("nascimento");
    const campoCpf    = document.getElementById("cpf");
    const campoTel    = document.getElementById("telefone");
    const campoCep    = document.getElementById("cep");
    const campoEnd    = document.getElementById("endereco");
    const campoCidade = document.getElementById("cidade");
    const campoEstado = document.getElementById("estado");

    campoNome.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "");
        validarCampo(
            campoNome,
            "erroNome",
            campoNome.value.trim().length >= 3,
            "Digite pelo menos 3 letras."
        );
    });

    campoEmail.addEventListener("input", function () {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validarCampo(
            campoEmail,
            "erroEmail",
            regexEmail.test(campoEmail.value.trim()),
            "Informe um e-mail válido."
        );
    });

    campoNasc.addEventListener("input", function () {
        const hoje  = new Date();
        const nasc  = new Date(campoNasc.value);
        const valido = campoNasc.value !== "" && nasc <= hoje;
        validarCampo(
            campoNasc,
            "erroNascimento",
            valido,
            "Informe uma data de nascimento válida."
        );
    });

    campoCpf.addEventListener("input", function () {
        let v = campoCpf.value.replace(/\D/g, "").substring(0, 11);

        if (v.length > 9)      v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
        else if (v.length > 6) v = v.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
        else if (v.length > 3) v = v.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");

        campoCpf.value = v;

        const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        validarCampo(
            campoCpf,
            "erroCpf",
            regexCpf.test(v),
            "CPF incompleto. Use o formato 000.000.000-00."
        );
    });

    campoTel.addEventListener("input", function () {
        let v = campoTel.value.replace(/\D/g, "").substring(0, 11);

        if (v.length === 11)      v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        else if (v.length === 10) v = v.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        else if (v.length > 6)    v = v.replace(/^(\d{2})(\d+)$/, "($1) $2");
        else if (v.length > 2)    v = v.replace(/^(\d{2})(\d+)$/, "($1) $2");

        campoTel.value = v;

        const regexTel = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        validarCampo(
            campoTel,
            "erroTelefone",
            regexTel.test(v),
            "Telefone incompleto. Use (XX) XXXXX-XXXX."
        );
    });

    campoCep.addEventListener("input", function () {
        let v = campoCep.value.replace(/\D/g, "").substring(0, 8);
        if (v.length > 5) v = v.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
        campoCep.value = v;

        const regexCep = /^\d{5}-\d{3}$/;
        validarCampo(
            campoCep,
            "erroCep",
            regexCep.test(v),
            "CEP incompleto. Use o formato 00000-000."
        );
    });

    campoEnd.addEventListener("input", function () {
        validarCampo(
            campoEnd,
            "erroEndereco",
            campoEnd.value.trim().length >= 5,
            "Informe o endereço completo."
        );
    });

    campoCidade.addEventListener("input", function () {
        campoCidade.value = campoCidade.value.replace(/[^\p{L}\s'-]/gu, "");
        validarCampo(
            campoCidade,
            "erroCidade",
            campoCidade.value.trim().length >= 2,
            "Informe a cidade."
        );
    });

    campoEstado.addEventListener("change", function () {
        validarCampo(
            campoEstado,
            "erroEstado",
            campoEstado.value !== "",
            "Selecione um estado."
        );
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tudo_ok = validarTudo();
        if (!tudo_ok) return;

        const participacao = document.querySelector('input[name="participacao"]:checked');
        const dados = {
            nome:         campoNome.value.trim(),
            email:        campoEmail.value.trim(),
            nascimento:   campoNasc.value,
            cpf:          campoCpf.value,
            telefone:     campoTel.value,
            cep:          campoCep.value,
            endereco:     campoEnd.value.trim(),
            cidade:       campoCidade.value.trim(),
            estado:       campoEstado.value,
            participacao: participacao ? participacao.value : "",
            dataRegistro: new Date().toLocaleString("pt-BR")
        };

        salvarNoLocalStorage(dados);
        mostrarToast();
        form.reset();
        limparErros();
    });

    form.addEventListener("reset", function () {
        setTimeout(limparErros, 0);
    });
}

function validarCampo(campo, idErro, condicao, mensagem) {
    const erro = document.getElementById(idErro);
    if (!erro) return condicao;

    if (condicao) {
        campo.classList.remove("campo-invalido");
        campo.classList.add("campo-valido");
        erro.textContent = "";
    } else {
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");
        erro.textContent = mensagem;
    }
    return condicao;
}

function validarTudo() {
    const campoNome        = document.getElementById("nome");
    const campoEmail       = document.getElementById("email");
    const campoNasc        = document.getElementById("nascimento");
    const campoCpf         = document.getElementById("cpf");
    const campoTel         = document.getElementById("telefone");
    const campoCep         = document.getElementById("cep");
    const campoEnd         = document.getElementById("endereco");
    const campoCidade      = document.getElementById("cidade");
    const campoEstado      = document.getElementById("estado");
    const participacao     = document.querySelector('input[name="participacao"]:checked');
    const erroParticipacao = document.getElementById("erroParticipacao");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCpf   = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexTel   = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    const regexCep   = /^\d{5}-\d{3}$/;
    const hoje       = new Date();
    const nasc       = new Date(campoNasc.value);

    const resultados = [
        validarCampo(campoNome,   "erroNome",       campoNome.value.trim().length >= 3,         "Digite pelo menos 3 letras."),
        validarCampo(campoEmail,  "erroEmail",       regexEmail.test(campoEmail.value.trim()),   "Informe um e-mail válido."),
        validarCampo(campoNasc,   "erroNascimento",  campoNasc.value !== "" && nasc <= hoje,     "Informe uma data de nascimento válida."),
        validarCampo(campoCpf,    "erroCpf",         regexCpf.test(campoCpf.value),              "CPF incompleto. Use o formato 000.000.000-00."),
        validarCampo(campoTel,    "erroTelefone",    regexTel.test(campoTel.value),              "Telefone incompleto. Use (XX) XXXXX-XXXX."),
        validarCampo(campoCep,    "erroCep",         regexCep.test(campoCep.value),              "CEP incompleto. Use o formato 00000-000."),
        validarCampo(campoEnd,    "erroEndereco",    campoEnd.value.trim().length >= 5,          "Informe o endereço completo."),
        validarCampo(campoCidade, "erroCidade",      campoCidade.value.trim().length >= 2,       "Informe a cidade."),
        validarCampo(campoEstado, "erroEstado",      campoEstado.value !== "",                   "Selecione um estado.")
    ];

    if (!participacao) {
        erroParticipacao.textContent = "Selecione uma forma de participação.";
        resultados.push(false);
    } else {
        erroParticipacao.textContent = "";
        resultados.push(true);
    }

    return resultados.every(Boolean);
}

function limparErros() {
    document.querySelectorAll(".campo-invalido, .campo-valido").forEach(function (el) {
        el.classList.remove("campo-invalido", "campo-valido");
    });
    document.querySelectorAll(".mensagem-erro").forEach(function (el) {
        el.textContent = "";
    });
}

function mostrarToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.classList.add("mostrar");
    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);
}

export { configurarFormulario, validarCampo, validarTudo, limparErros, mostrarToast };