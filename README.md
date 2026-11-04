# Tropa dos Buiús — GitHub Pages

Site estático em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Arquivos
- `index.html`: página inicial e carrossel.
- `episodio.html`: página individual de cada episódio.
- `data/episodios.js`: cadastro dos episódios.
- `assets/style.css`: cores, fontes e layout.
- `assets/app.js`: carrossel.
- `assets/episodio.js`: conteúdo da página de episódio.
- `assets/banner.svg`: ilustração provisória do banner.

## Como adicionar um episódio
Abra `data/episodios.js` e adicione um objeto dentro de `window.TROPA_EPISODIOS`:

```js
window.TROPA_EPISODIOS = [
  {
    id: "fuga-da-etec",
    titulo: "Fuga da ETEC",
    descricao: "Uma descrição curta para o cartão.",
    capa: "https://seu-link-de-imagem.jpg",
    texto: "Aqui vai a história completa do episódio.",
    jogo: "https://seu-link-do-jogo",
    publicado: true
  }
];
```

- `id`: identificador único, sem espaços e sem acentos.
- `capa`: endereço público da imagem.
- `texto`: texto da página do episódio.
- `jogo`: URL do jogo. Se não tiver jogo ainda, use `""`.
- `publicado`: `true` mostra o episódio; `false` deixa oculto.

A página do episódio será `episodio.html?id=fuga-da-etec`.

## Publicar no GitHub Pages
1. Crie um repositório público no GitHub, por exemplo `tropa-dos-buius`.
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione `main` e `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação. O endereço será parecido com `https://SEU-USUARIO.github.io/tropa-dos-buius/`.

Não renomeie `index.html` e mantenha as pastas `assets` e `data`.
