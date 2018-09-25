import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import { fetchComments } from '../actions'
import { JSON_MIME_TYPE, FETCH_COMMENTS } from '../../utils/constants'

const middleWares = [thunk]
const mockStore = configureMockStore(middleWares)

const mockResponse = (status, statusText, response = '') => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: { 'Content-type': JSON_MIME_TYPE, 'Accept': JSON_MIME_TYPE }
  })
}

describe('async actions', () => {
  it('creates FETCH_COMMENTS when fetching comments has been started', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null)))

    const initialState = {
      items: [],
      loading: false,
      error: null
    }
    const store = mockStore(initialState)

    store.dispatch(fetchComments())

    const expectedActions = store.getActions()

    return expect(expectedActions.length).toBe(1) && expect(expectedActions).toContainEqual({ type: FETCH_COMMENTS })
  })
})
