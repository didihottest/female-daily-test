const request = require('supertest')
const app = require('../app')
describe("Order Page", () => {
  test("should render list", () => {
    return request(app)
      .get('/')
      .send().expect(200)
  })
  test("should render pivot list", () => {
    return request(app)
      .get('/pivot')
      .send().expect(200)
  })
})
