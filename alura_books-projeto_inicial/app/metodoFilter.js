const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
const btnLivrosDisponiveis  = document.querySelector('#btnLivrosDisponiveis');

btnLivrosDisponiveis.addEventListener('click', () => {
    const livrosDisponiveis = livros.filter(livro => {
        return livro.quantidade > 0
    })
    exibirOsLivros(livrosDisponiveis);
})


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    livros.filter(livro => 
        livro.categoria == categoria)
    exibirOsLivros(livrosFiltrados)
}
