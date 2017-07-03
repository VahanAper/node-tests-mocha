const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Express', () => {
  describe('GET /', () => {
    it('should return Hello World! response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'Page Not Found.'
        });
      })
      .end(done);
    });
  });

  describe('GET /users', () => {    
    it('should return users', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Vahan',
          age: 30,
        });
      })
      .end(done);
    });
  });
});
