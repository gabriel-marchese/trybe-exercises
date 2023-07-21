const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../src/app');

describe('Testando as rotas', function () {
  describe('Testando método GET', function () {
    it('Retorna uma lista de filmes', async function() {
      const response = await chai.request(app).get('/movies');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.haveOwnProperty('list');
      expect(response.body.list).to.be.instanceOf(Array);
    })
  });
  
  describe('Testando método POST', function () {
    it('Enviando um dado para a lista', async function() {
      const mockMovie = {
        movie: "Barbie",
        price: 8
      };

      const response = await chai.request(app).post('/movies').send(mockMovie);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.haveOwnProperty('newMovie');
      expect(response.body.newMovie).to.be.instanceOf(Object);
      expect(response.body.newMovie.movie).to.be.equal('Barbie');
      expect(response.body.newMovie.price).to.be.equal(8);
    })
  })
});

