function somarValorTotalDeLivros (livros) {
    const precoDosLivros = livros.map((x) => x.preco)
    const precoTotal = precoDosLivros.reduce((acc,livro) => acc + livro, 0)
    return precoTotal
}