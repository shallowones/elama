import { JSON_MIME_TYPE } from '../utils/constants'

/* global REMOTE */

/**
 * Request comments from the server
 * @returns {Promise<Array | never>}
 */
export function getComments () {
  /**
   * Fetch error handler
   * @param {XMLHttpRequest} response
   * @returns {{ok}|Object}
   */
  const handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    return response
  }
  /**
   * Query for request (GraphQL syntax)
   * @type {string}
   * @see https://graphql.org/learn/queries/
   */
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
