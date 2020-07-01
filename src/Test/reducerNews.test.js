import reducerNews, { initialState } from '../Reducers/reducerNews';

describe('news reducer', () => {
  it('action News', () => {
    let state = initialState;
    const action = {
      type: 'NEWS_RECEIPT',
      data: { id: 1, title: 'Test', body: 'Test' },
    };

    expect(reducerNews(state, action)).toEqual((state = action.data));
  });
});
