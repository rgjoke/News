import { NEWS_RECEIPT } from '../actions/types';

export const initialState = null;

export default function reducerNews(state = initialState, action) {
  if (action.type === NEWS_RECEIPT) {
    state = action.data;
  }

  return state;
}
