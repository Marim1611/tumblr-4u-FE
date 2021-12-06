//handlers.js is going to be the place where we specify the behaviors of our mock API.
import { rest } from 'msw'

export default [
  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'it works :)'
      })
    )
  }),
  rest.get('/nameDrawer', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Marim'
      })
    )
  }),
  

]