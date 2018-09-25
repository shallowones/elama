import { getComments } from './api'
import { FETCH_COMMENTS } from '../utils/constants'

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
  promise: getComments()
})
