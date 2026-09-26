import { roteador } from "./router.js";

const app = document.getElementById("app");

export { app };

window.addEventListener("hashchange", roteador);
roteador();

import { iniciarTema } from "./theme.js";

iniciarTema();