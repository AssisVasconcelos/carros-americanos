function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Inicializa uma string vazia para armazenar os resultados
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  //se campoPesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML =
      '<p class="nenhum-resultado">Nenhum resultado encontrado!</p>';
    return;
  }
  campoPesquisa = campoPesquisa.toLowerCase();
  console.log(campoPesquisa);
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento div para cada resultado
      resultados += `
    <div class="item-resultado">
      
      <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações</a>
      <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-atleta" />
    </div>`;
    }
  }

  if (!resultados) {
    resultados = '<p class="nenhum-resultado">Nenhum resultado encontrado!</p>';
  }
  // Atribui os resultados gerados ao conteúdo da seção
  section.innerHTML = resultados;
}
