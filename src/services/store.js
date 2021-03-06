import { createStore, applyMiddleware } from 'redux'
import { handle, middleware as reduxPackMiddleware } from 'redux-pack'

import { FETCH_COMMENTS } from '../utils/constants'

/**
 * Initial state of store
 * @type {{items: Array, loading: boolean, error: null}}
 */
const initialState = {
  items: [],
  loading: false,
  error: null
}

/**
 * Comments reducer
 * @param {{items: Array, loading: boolean, error: String|null}} state
 * @param {String} action
 * @returns {{items: Array, loading: boolean, error: String|null}}
 */
const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_COMMENTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          loading: true,
          error: null
        }),
        finish: prevState => ({ ...prevState, loading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, items: payload })
      })
    default:
      return state
  }
}

export default createStore(
  commentsReducer,
  applyMiddleware(reduxPackMiddleware)
)
