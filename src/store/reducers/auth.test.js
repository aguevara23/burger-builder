import reducer from './auth';

import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })
  it('should store a token when authenticating', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'random-test-token',
      userId: 'random-test-user'
    })).toEqual({
      token: 'random-test-token',
      userId: 'random-test-user',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  })
})
