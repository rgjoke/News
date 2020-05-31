import reducerAuth, { initialState } from '../Reducers/reducerAuth';

describe('auth reducer', () => {
    it('Action Auth LogIn true', () => {
        let state = initialState;
        const action = {
            type: 'Auth',
            auth: {id: 1, login: 'Test'}
        }
    
    expect(reducerAuth(state, action)).toEqual(state = [action.auth])
    })

    it('Action Auth LogIn false', () => {
        let state = initialState;
        const action = {
            type: 'Auth_False'
        }
    
    expect(reducerAuth(state, action)).toEqual(state = null)
    })
})