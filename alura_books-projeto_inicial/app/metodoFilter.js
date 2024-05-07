const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
const btnLivrosDisponiveis  = document.querySelector('#btnLivrosDisponiveis');
const elementoComValorTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

btnLivrosDisponiveis.addEventListener('click', () => {
    const livrosDisponiveis = livros.filter(livro => {
        return livro.quantidade > 0
    })
    exibirOsLivros(livrosDisponiveis);
    const precoTotal = somarValorTotalDeLivros(livrosDisponiveis); 
    exibirValorTotalDeLivrosDisponiveis(precoTotal); 
})


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == categoria)
    exibirOsLivros(livrosFiltrados)
}


function exibirValorTotalDeLivrosDisponiveis (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}0</span></p>
    </div>
    `
}
