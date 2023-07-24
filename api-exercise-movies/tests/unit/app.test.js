// npm install sinon@11.1.1 --save-dev --save-exact
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const { readList } = require('../../src/filtros');

const mockMovies = JSON.stringify([
    {"id":1,"movie":"Avatar","price":5},
    {"id":2,"movie":"Gente Grande","price":2},
    {"id":3,"movie":"Quebrando a Banca","price":5}
]);

describe('Testando a função readList', function () {
    it('retonar um array', async function () {
        sinon.stub(fs.promises, 'readFile').resolves(mockMovies);

        const list = await readList();

        expect(list).to.be.instanceOf(Array);
        expect(list).to.be.lengthOf(3);
        sinon.restore();
    })
})