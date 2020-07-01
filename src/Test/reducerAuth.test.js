import reducerAuth, { initialState } from '../Reducers/reducerAuth';

describe('auth reducer', () => {
  it('Action Auth LogIn true', () => {
    let state = initialState;
    const action = {
      type: 'AUTH_TRUE',
      auth: { id: 1, firstname: 'Test' },
    };

    expect(reducerAuth(state, action)).toEqual((state = action.auth));
  });

  it('Action Auth LogIn false', () => {
    let state = initialState;
    const action = {
      type: 'AUTH_FALSE',
    };

    expect(reducerAuth(state, action)).toEqual((state = null));
  });
});
