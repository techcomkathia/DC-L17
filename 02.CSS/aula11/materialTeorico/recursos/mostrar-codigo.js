// Para cada bloco .exemplo, mostra logo abaixo o HTML usado nele.
// Assim o código exibido é sempre igual ao exemplo que aparece na tela.

function tirarRecuo(texto) {
  const linhas = texto.replace(/^\n+|\s+$/g, "").split("\n");
  const recuos = linhas
    .filter((linha) => linha.trim() !== "")
    .map((linha) => linha.match(/^\s*/)[0].length);
  const menor = Math.min(...recuos);
  return linhas.map((linha) => linha.slice(menor)).join("\n");
}

document.querySelectorAll(".exemplo").forEach((exemplo) => {
  const bloco = document.createElement("div");
  bloco.className = "bloco-codigo";

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "btn btn-sm btn-outline-light botao-copiar";
  botao.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = tirarRecuo(exemplo.innerHTML);
  pre.appendChild(code);

  botao.addEventListener("click", () => {
    navigator.clipboard.writeText(code.textContent).then(() => {
      botao.innerHTML = '<i class="bi bi-check2"></i> Copiado';
      setTimeout(() => {
        botao.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';
      }, 1500);
    });
  });

  bloco.append(botao, pre);
  exemplo.after(bloco);
});
