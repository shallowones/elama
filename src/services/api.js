/* global REMOTE */
import { JSON_MIME_TYPE } from '../utils/constants'

export function getComments () {
  const handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    return response
  }

  const query = `
    {
      comments
        {
          postId
          id
          name
          email
          body
        }
    }
  `

  return fetch(REMOTE, {
    method: 'POST',
    headers: { 'Content-Type': JSON_MIME_TYPE, 'Accept': JSON_MIME_TYPE },
    body: JSON.stringify({ query })
  })
    .then(handleErrors)
    .then(res => res.json())
    .then(({ data }) => {
      const { comments } = data

      return comments || []
    })
}
