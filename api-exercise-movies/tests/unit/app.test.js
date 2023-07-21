const { expect } = require('chai');

const { readList } = require('../../src/filtros');

describe('Testando a função readList', function () {
    it('retonar um array', async function () {
        const list = await readList();

        expect(list).to.be.instanceOf(Array);
    })
})