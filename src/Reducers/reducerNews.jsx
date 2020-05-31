export const initialState = [];

export default function reducerNews(state = initialState, action) {
    if(action.type === 'News') {
        state = action.data;
    }
    
    return state;
}