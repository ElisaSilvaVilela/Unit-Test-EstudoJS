const calculaComissaoVenda = require('.');

it ('se a lista estiver vazia, a comissao é zero', () => {
    const resultadoAtual = calculaComissaoVenda([]);
    const resultadoEsperado = 0;

    expect(resultadoAtual).toBe(resultadoEsperado);
});

it ('calcula comissão quando só tem um item na lista', () => {
    const resultadoAtual = calculaComissaoVenda([{
        id: 'PROD-123',
        precoUnitario: 1000,
        quantidadeVendida: 1
    }])
    const resultadoEsperado = 50;

    expect(resultadoAtual).toBe(resultadoEsperado);
})

it ('calcula comissão quando há mais de um item na lista', () => {
    const resultadoAtual = calculaComissaoVenda ([
        {
            id:'PROD-123',
            precoUnitario: 1000,
            quantidadeVendida: 1
        },
        {
            id: 'PROD-456',
            precoUnitario: 100,
            quantidadeVendida: 5
        }])
    const resultadoEsperado = 75;

    expect(resultadoAtual).toBe(resultadoEsperado);
});

it ('calcula comissão de 10%', () => {
    const resultadoAtual = calculaComissaoVenda([
        {
            id: 'PROD-789',
            precoUnitario: 2000,
            quantidadeVendida: 1
        }])
        const resultadoEsperado = 200;

        expect(resultadoAtual).toBe(resultadoEsperado);
});

it ('calcula comissão de 15%', () => {
    const resultadoAtual = calculaComissaoVenda([
        {
            id: 'PROD-789',
            precoUnitario: 2000,
            quantidadeVendida: 3
        }])
        const resultadoEsperado = 900;

        expect(resultadoAtual).toBe(resultadoEsperado);
});