import { AUTH_TRUE, AUTH_FALSE } from '../actions/types';

export const initialState = null;

export default function reducerAuth(state = initialState, action) {
  if (action.type === AUTH_TRUE) {
    state = action.auth;
  } else if (action.type === AUTH_FALSE) {
    state = null;
  }
  return state;
}
