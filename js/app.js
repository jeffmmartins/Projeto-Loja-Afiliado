const resposta = document.querySelector('#outResposta')
// Array com os produtos e os seus respectivos links
const produtos = [
{nome: "produto01", site: "https://shope.ee/8A6qgywlVL" },
{nome: "produto02", site: "https://shope.ee/4pqPEUDf9s" },
{nome: "produto03", site: "https://shope.ee/6KfGLf3dfX" },
{nome: "produto04", site: "https://shope.ee/1Va4nWpjbO" },
{nome: "produto05", site: "https://shope.ee/7pU8KVV3V2" },
{nome: "produto06", site: "https://shope.ee/2fm28em6Yo" },
{nome: "produto07", site: "https://shope.ee/4pqWkieXmW" },
{nome: "produto08", site: "https://shope.ee/9zYXErY5oR" },
{nome: "produto09", site: "https://shope.ee/2ApfnoJ9a0" }
]

//quando clica em pesquisar executa a lógica
inPesquisar.addEventListener("click", () => {
  const pesquisa = inTexto.value                     // obtém o valor do campo busca
  let nomePesquisado = pesquisa.toLowerCase()        // converte as letras para minuscúlo
  let nomeProduto = ""                               // recebe o nome do produto
  for (let i = 0; i < produtos.length; i++){         // cria o laço de repetição 
    if(produtos[i].nome == nomePesquisado){          // verifica se o nome da busca é igual ao nome que está no vetor para executar a lógica
      nomeProduto = produtos[i].nome
      const novaFoto = document.createElement("img")  
      novaFoto.src = `img/${nomeProduto}.jpeg`       // cria uma nova imagem
      novaFoto.textAlt = "Produto01"                 // texto alternativo
      inFotos.appendChild(novaFoto)
      const novoLink = document.createElement("a")  
      novoLink.href = `${produtos[i].site}`          //cria link para o produto
      novoLink.textContent = "Clique aqui"
      inSite.appendChild(novoLink)
      break                                
    }
  }

  // verifica se o nome pesqusado é diferente do nome do produto
  if(nomePesquisado != nomeProduto){
    alert("Produto Não encontrado")
  }
  resposta.innerHTML = nomeProduto.toUpperCase()
})
