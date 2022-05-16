const request = require('supertest')
const app = require('../../app')
describe("twitter timeline API", () => {
  test("should run", () => {
    return request(app)
      .get('/twitter/timeline')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            data: expect.objectContaining({
              tweets: expect.any(Object)
            })
          })
        )
      })
  })
})
