
import * as request from 'supertest'
import { app } from '../../app'

const ROOT_URL = '/v1/user-logos'

describe('User logos endpoint', () => {

  test('Returns a token for correct login details', () => {
    const reqFromBrief = {
      payload: [
        {
          count: 12,
          logos: [
            {
              size: '16x16',
              url: 'https://example.com/16x16.png',
            },
            {
              size: '64x64',
              url: 'https://example.com/64x64.png',
            },
          ],
          name: 'Molly',
        },
        {
          count: 0,
          logos: [
            {
              size: '128x128',
              url: 'https://example.com/128x128.png',
            },
            {
              size: '64x64',
              url: 'https://example.com/64x64.png',
            },
          ],
          name: 'Dolly',
        },
        {
          count: 4,
          logos: [
            {
              size: '16x16',
              url: 'https://example.com/16x16.png',
            },
            {
              size: '64x64',
              url: 'https://example.com/64x64.png',
            },
          ],
          name: 'Polly',
        },
      ],
    }
    const resFromBrief = {
      response: [
        {
          count: 12,
          name: 'Molly',
          thumbnail: 'https://example.com/64x64.png',
        },
        {
          count: 4,
          name: 'Polly',
          thumbnail: 'https://example.com/64x64.png',
        },
      ],
    }

    return request(app)
      .post(ROOT_URL)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(reqFromBrief)
      .then((res) => {
        expect(res.body).toEqual(resFromBrief)
      })
  })

})
