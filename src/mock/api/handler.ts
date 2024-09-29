import { http, HttpResponse } from 'msw'

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  /**
   * Third Party API handlers
   */

  http.get('/posts', () => {
    return HttpResponse.json([
      {
        id: 'f8dd058f-9006-4174-8d49-e3086bc39c21',
        title: `Avoid Nesting When You're Testing`,
      },
      {
        id: '8ac96078-6434-4959-80ed-cc834e7fef61',
        title: `How I Built A Modern Website In 2021`,
      },
    ])
  }),
]
