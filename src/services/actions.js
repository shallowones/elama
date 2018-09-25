import { getComments } from './api'
import { FETCH_COMMENTS } from '../utils/constants'

/**
 * Action of request comments
 * @returns {{type: string, promise: function}}
 */
export const fetchComments = () => ({
  type: FETCH_COMMENTS,
  promise: getComments()
})
