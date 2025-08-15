const calculaComissaoVenda = require('.');

it ('se a lista estiver vazia, a comissao é zero', () => {
    const resultadoAtual = calculaComissaoVenda([]);
    const resultadoEsperado = 0;

    expect(resultadoAtual).toBe(resultadoEsperado);
});