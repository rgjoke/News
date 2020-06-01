export const initialState = null;

export default function reducerAuth(state = initialState, action) {
    if(action.type === 'Auth') {
        state = action.auth;
    }
    else if(action.type === 'Auth_False') {
        state = null;
    }
    return state;
}