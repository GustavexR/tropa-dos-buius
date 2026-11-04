(() => {
  const episodes = (window.TROPA_EPISODIOS || []).filter(e => e.publicado);
  const track = document.getElementById("trilho");
  const empty = document.getElementById("vazio");
  const left = document.getElementById("seta-esq");
  const right = document.getElementById("seta-dir");
  if (!track) return;

  episodes.forEach((ep, index) => {
    const card = document.createElement("article");
    card.className = "cartao";
    const link = `episodio.html?id=${encodeURIComponent(ep.id)}`;
    const cover = document.createElement("a");
    cover.className = "cartao-capa";
    cover.href = link;
    const img = document.createElement("img");
    img.src = ep.capa || "assets/banner.svg";
    img.alt = `Capa de ${ep.titulo || "episódio"}`;
    img.loading = "lazy";
    cover.appendChild(img);
    const seal = document.createElement("span");
    seal.className = "selo";
    seal.textContent = `Episódio ${index + 1}`;
    cover.appendChild(seal);

    const body = document.createElement("div");
    body.className = "cartao-corpo";
    const title = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.href = link;
    titleLink.textContent = ep.titulo || `Episódio ${index + 1}`;
    title.appendChild(titleLink);
    const desc = document.createElement("p");
    desc.textContent = ep.descricao || "Conheça esta aventura da Tropa dos Buiús.";
    const button = document.createElement("a");
    button.className = "botao";
    button.href = link;
    button.textContent = "VER EPISÓDIO";
    body.append(title, desc, button);
    card.append(cover, body);
    track.appendChild(card);
  });

  if (empty) empty.hidden = episodes.length > 0;

  const step = () => Math.max(track.clientWidth * 0.8, 250);
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 4;
    if (left) left.disabled = track.scrollLeft <= 4;
    if (right) right.disabled = track.scrollLeft >= max;
  };
  left?.addEventListener("click", () => track.scrollBy({left: -step(), behavior: "smooth"}));
  right?.addEventListener("click", () => track.scrollBy({left: step(), behavior: "smooth"}));
  track.addEventListener("scroll", update, {passive:true});
  window.addEventListener("resize", update);
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") right?.click();
    if (e.key === "ArrowLeft") left?.click();
  });

  let down = false, startX = 0, startScroll = 0, moved = false;
  track.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true; moved = false; startX = e.clientX; startScroll = track.scrollLeft;
  });
  window.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 6) { moved = true; track.classList.add("arrastando"); }
    if (moved) track.scrollLeft = startScroll - dx;
  });
  const release = () => { down = false; track.classList.remove("arrastando"); update(); };
  window.addEventListener("pointerup", release);
  window.addEventListener("pointercancel", release);
  update();
})();
