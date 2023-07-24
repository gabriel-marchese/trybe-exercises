const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon')
const fs = require('fs');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../src/app');

const mockMovies = JSON.stringify([
  {"id":1,"movie":"Avatar","price":5},
  {"id":2,"movie":"Gente Grande","price":2},
  {"id":3,"movie":"Quebrando a Banca","price":5}
]);


describe('Testando as rotas', function () {
  afterEach(sinon.restore)
  describe('Testando método GET', function () {
    it('Retorna uma lista de filmes', async function() {
      sinon.stub(fs.promises, 'readFile').resolves(mockMovies);
      const response = await chai.request(app).get('/movies');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.haveOwnProperty('list');
      expect(response.body.list).to.be.instanceOf(Array);
      expect(response.body.list).to.be.lengthOf(3);
    })
  });
  
  describe('Testando método POST', function () {
    const mockMovie = {
      movie: "Barbie",
      price: 8
    };

    it('Enviando um dado para a lista', async function() {
      sinon.stub(fs.promises, 'writeFile').resolves();

      const response = await chai.request(app).post('/movies').send(mockMovie);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.haveOwnProperty('newMovie');
      expect(response.body.newMovie).to.be.instanceOf(Object);
      expect(response.body.newMovie.movie).to.be.equal('Barbie');
      expect(response.body.newMovie.price).to.be.equal(8);
    })
    it('Conferindo se realmente foi escrito o novo filme dentro do arquivo', async function () {
      sinon.stub(fs.promises, 'writeFile').resolves();
      await chai.request(app).post('/movies').send(mockMovie);
      expect(fs.promises.writeFile.called).to.be.equal(true);

    })
  })
});

