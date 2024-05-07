function somarValorTotalDeLivros (livros) {
    const precoDosLivros = livros.map((livro) => livro.preco)
    const precoTotal = precoDosLivros.reduce((acc,livro) => acc + livro, 0)
    return precoTotal
}