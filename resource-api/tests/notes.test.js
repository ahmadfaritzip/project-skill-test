const request = require('supertest')
const app = require('../app')

describe('Notes Module', () => {

  describe('POST /api/notes', () => {
    it('should return success if using valid data', async () => {
      await request(app)
        .post('/api/notes')
        .send({
          note: 'test note',
        })
        .expect('Content-Type', /json/)
        .expect(200)
    })

    it('should return Unprocessable Content (422) if using invalid data', async () => {
      await request(app)
        .post('/api/notes')
        .send({})
        .expect('Content-Type', /json/)
        .expect(422)
    })
  })

  describe('GET /api/notes', () => {
    it('should response the GET method', async () => {
      await request(app)
        .get('/api/notes')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  })

})
