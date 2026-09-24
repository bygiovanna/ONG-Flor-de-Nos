import { app } from "./main.js";
import { renderGraficoImpacto } from "./chart.js";
import { configurarFormulario } from "./validation.js";

function renderInicio() {
    app.className = "pagina-inicial";

    app.innerHTML = `
        <div class="galeria">
            <img src="../imagens/oficina-artesanato.png.png"
                alt="Voluntários da ONG Flor de Nós realizando uma oficina de artesanato com materiais recicláveis">
            <img src="../imagens/doação_roupas.jfif"
                alt="Dia da doação de roupas da ONG Flor de Nós, com voluntários ajudando a organizar as doações">
            <img src="../imagens/equipe.jfif"
                alt="Nosso time de voluntários da ONG Flor de Nós, reunidos em uma foto de grupo">
        </div>

        <section>
            <h2>Quem somos</h2>
            <p>
                Somos uma organização dedicada a promover ações
                sociais e ajudar pessoas em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Nossa Missão</h2>
            <p>
                Promover ações que fortaleçam a comunidade,
                incentivando a solidariedade, a inclusão e a participação social.
            </p>
        </section>
    `;
}

function renderProjetos() {
    app.className = "";

    app.innerHTML = `
        <section id="doacoes">
            <h2>Campanhas de Doação</h2>
            <article>
                <h3>Doação de Alimentos</h3>
                <p>Campanha de arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.</p>
                <span class="badge">Projeto ativo</span>
            </article>
            <article>
                <h3>Doação de Roupas</h3>
                <p>Campanha de arrecadação de roupas em bom estado para pessoas e famílias que precisam de apoio.</p>
                <span class="badge">Projeto ativo</span>
            </article>
        </section>

        <section id="educacao">
            <h2>Educação e Capacitação</h2>
            <article>
                <h3>Cursos Profissionalizantes</h3>
                <p>Cursos de qualificação profissional e preparação para o primeiro emprego de jovens e adultos.</p>
                <div class="alerta"><strong>Importante:</strong> As inscrições para este projeto estão abertas.</div>
            </article>
            <article>
                <h3>Reforço Escolar</h3>
                <p>Apoio ao aprendizado de crianças e adolescentes por meio de atividades educacionais.</p>
                <div class="alerta"><strong>Importante:</strong> As inscrições para este projeto estão abertas.</div>
            </article>
            <article>
                <h3>Inclusão Digital</h3>
                <p>Cursos e atividades que ajudam jovens e adultos a desenvolver conhecimentos básicos de tecnologia e ferramentas digitais.</p>
                <div class="alerta"><strong>Importante:</strong> As inscrições para este projeto estão abertas.</div>
            </article>
        </section>

        <section id="comunidade">
            <h2>Ações Comunitárias</h2>
            <article>
                <h3>Hortas Comunitárias</h3>
                <p>Criação e manutenção de espaços de cultivo que contribuem para uma alimentação saudável e fortalecem os laços entre os moradores da comunidade.</p>
                <span class="badge">Projeto ativo</span>
            </article>
        </section>

        <section id="eventos">
            <h2>Eventos e Oficinas</h2>
            <article>
                <h3>Oficinas de Artesanato</h3>
                <p>Eventos realizados aos finais de semana para ensinar técnicas de artesanato utilizando materiais recicláveis, incentivando a criatividade e a sustentabilidade.</p>
                <span class="badge">Projeto ativo</span>
            </article>
        </section>

        <section id="impacto">
            <h2>Nosso Impacto em Números</h2>
            <div class="grafico-container">
                <canvas id="graficoImpacto"></canvas>
            </div>
        </section>
    `;

    renderGraficoImpacto();
}

function renderCadastro() {
    app.className = "cadastro";

    app.innerHTML = `
        <h2>Juntos, podemos fazer a diferença</h2>

        <p>
            Preencha o formulário abaixo para fazer parte da ONG Flor de Nós
            e contribuir com nossas ações sociais:
        </p>

        <form id="formCadastro" novalidate>

            <fieldset>
                <legend>Dados Pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome completo"
                    autocomplete="name">
                <small class="mensagem-erro" id="erroNome"></small>

                <br><br>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com"
                    autocomplete="email">
                <small class="mensagem-erro" id="erroEmail"></small>

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento">
                <small class="mensagem-erro" id="erroNascimento"></small>

                <br><br>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00"
                    maxlength="14" inputmode="numeric">
                <small class="mensagem-erro" id="erroCpf"></small>

                <br><br>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999"
                    maxlength="15" inputmode="numeric">
                <small class="mensagem-erro" id="erroTelefone"></small>
            </fieldset>

            <br>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" placeholder="00000-000"
                    maxlength="9" inputmode="numeric">
                <small class="mensagem-erro" id="erroCep"></small>

                <br><br>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco"
                    autocomplete="street-address">
                <small class="mensagem-erro" id="erroEndereco"></small>

                <br><br>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade"
                    autocomplete="address-level2">
                <small class="mensagem-erro" id="erroCidade"></small>

                <br><br>

                <label for="estado">Estado:</label>
                <select id="estado" name="estado">
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
                <small class="mensagem-erro" id="erroEstado"></small>
            </fieldset>

            <br>

            <fieldset>
                <legend>Forma de Participação</legend>

                <input type="radio" id="voluntario" name="participacao" value="voluntario">
                <label for="voluntario">Voluntário</label>

                <input type="radio" id="doador" name="participacao" value="doador">
                <label for="doador">Doador</label>

                <small class="mensagem-erro" id="erroParticipacao"></small>
            </fieldset>

            <br>

            <button type="submit">Cadastrar</button>
            <button type="reset">Limpar</button>

        </form>

        <div id="toast" class="toast" role="status" aria-live="polite">
            Cadastro realizado com sucesso! ✅
        </div>
    `;

    configurarFormulario();
}

export { renderInicio, renderProjetos, renderCadastro };