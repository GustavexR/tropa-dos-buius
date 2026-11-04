(() => {
  const root = document.getElementById("conteudo-episodio");
  const episodes = window.TROPA_EPISODIOS || [];
  const id = new URLSearchParams(location.search).get("id");
  const ep = episodes.find(item => item.id === id && item.publicado);

  if (!ep) {
    root.innerHTML = `
      <a class="voltar" href="index.html">← Todas as histórias</a>
      <h1 class="jogo-titulo">Episódio não encontrado</h1>
      <p>Esse episódio não existe ou ainda não foi publicado.</p>
      <a class="botao" href="index.html">VOLTAR AO INÍCIO</a>`;
    return;
  }

  document.title = `${ep.titulo} | Tropa dos Buiús`;
  const back = document.createElement("a");
  back.className = "voltar";
  back.href = "index.html";
  back.textContent = "← Todas as histórias";

  const heading = document.createElement("h1");
  heading.className = "jogo-titulo";
  heading.textContent = ep.titulo;

  const cover = document.createElement("img");
  cover.className = "capa-episodio";
  cover.src = ep.capa || "assets/banner.svg";
  cover.alt = `Capa de ${ep.titulo}`;

  const description = document.createElement("p");
  description.className = "descricao-episodio";
  description.textContent = ep.descricao || "";

  const story = document.createElement("div");
  story.className = "texto-episodio";
  story.textContent = ep.texto || "";

  root.replaceChildren(back, heading, cover, description, story);

  if (ep.jogo) {
    const section = document.createElement("section");
    section.className = "area-jogo";
    const sub = document.createElement("h2");
    sub.textContent = "Jogue agora!";
    const frame = document.createElement("iframe");
    frame.src = ep.jogo;
    frame.title = `Jogo: ${ep.titulo}`;
    frame.loading = "lazy";
    frame.allowFullscreen = true;
    const open = document.createElement("a");
    open.className = "botao";
    open.href = ep.jogo;
    open.target = "_blank";
    open.rel = "noopener noreferrer";
    open.textContent = "ABRIR JOGO";
    section.append(sub, frame, open);
    root.appendChild(section);
  }
})();
