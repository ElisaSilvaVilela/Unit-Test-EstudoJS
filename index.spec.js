const calculaComissaoVenda = require('.');

it ('se a lista estiver vazia, a comissao é zero', () => {
    const resultadoAtual = calculaComissaoVenda([]);
    const resultadoEsperado = 0;

    expect(resultadoAtual).toBe(resultadoEsperado);
});

it ('calcula comissão quando só tem um item na lista', () => {
    const resultadoAtual = calculaComissaoVenda([{
        id: 'PROD-123',
        precoUnitario: 100,
        quantidadeVendida: 1
    }])
    const resultadoEsperado = 50;

    expect(resultadoAtual).toBe(resultadoEsperado);
})