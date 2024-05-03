let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI ()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivros(livrosComDesconto)
}

const elementoParaInserirLivros = document.querySelector('#livros')




//Fazer exercicios de For e Foreach

//Fazer exercícios para cada método aprendido no curso